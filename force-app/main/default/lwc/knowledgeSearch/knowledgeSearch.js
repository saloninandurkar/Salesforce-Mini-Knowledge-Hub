import { LightningElement, track, wire } from 'lwc';
import searchArticles from '@salesforce/apex/KnowledgeArticleController.searchArticles';
import incrementViewCount from '@salesforce/apex/KnowledgeArticleController.incrementViewCount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class KnowledgeSearch extends NavigationMixin(LightningElement) {
    @track searchTerm = '';      // reactive search term passed to @wire
    @track limitSize = 10;       // maximum results
    @track articles = [];        // local array of article objects for rendering
    @track loading = false;

    // debounce timer for the search input
    debounceTimer;

    // Wire the cacheable Apex search method. Parameter names must match your Apex signature.
    @wire(searchArticles, { searchTerm: '$searchTerm', limitSize: '$limitSize' })
    wiredArticles({ error, data }) {
        if (data) {
            this.articles = data.map(a => ({
                Id: a.Id,
                Name: a.Name || (a.Title__c || ''),
                View_Count__c: a.View_Count__c
            }));
            this.loading = false;
        } else if (error) {
            this.articles = [];
            this.loading = false;
            const msg = error.body?.message || error.message || 'Unknown error';
            this.dispatchEvent(
                new ShowToastEvent({ title: 'Search error', message: msg, variant: 'error' })
            );
        } else {
            this.articles = [];
        }
    }

    // Getter for "No results" message
    get showNoResults() {
        return !this.loading && (!this.articles || this.articles.length === 0);
    }

    // input handler with debounce (300ms)
    handleSearchInput(e) {
        window.clearTimeout(this.debounceTimer);
        const value = e.target.value;
        this.debounceTimer = window.setTimeout(() => {
            this.searchTerm = value;
        }, 300);
    }

    // explicit search button (optional)
    handleSearchClick() {
        window.clearTimeout(this.debounceTimer);
        const el = this.template.querySelector('lightning-input');
        this.searchTerm = el ? el.value : this.searchTerm;
    }

    // When user clicks a result, increment the view count then navigate to record page
    handleOpenAndIncrement(event) {
        const articleId = event.currentTarget.dataset.id;
        if (!articleId) return;

        this.loading = true;
        incrementViewCount({ articleId })
            .then((updatedCount) => {
                const idx = this.articles.findIndex(a => a.Id === articleId);
                if (idx !== -1) {
                    this.articles[idx].View_Count__c = updatedCount;
                    this.articles = [...this.articles]; // force re-render
                }

                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: articleId,
                        objectApiName: 'Knowledge_Article__c',
                        actionName: 'view'
                    }
                });
            })
            .catch(err => {
                const msg = err.body?.message || err.message || 'Error incrementing view count';
                this.dispatchEvent(
                    new ShowToastEvent({ title: 'Error', message: msg, variant: 'error' })
                );
            })
            .finally(() => {
                this.loading = false;
            });
    }
}
