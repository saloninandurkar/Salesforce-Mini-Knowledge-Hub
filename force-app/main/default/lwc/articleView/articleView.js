import { LightningElement, api, track } from 'lwc';
import incrementViewCount from '@salesforce/apex/ArticleController.incrementViewCount';

export default class ArticleView extends LightningElement {
    @api recordId;
    @track viewCount;

    connectedCallback() {
        this.updateViewCount();
    }

    updateViewCount() {
        incrementViewCount({ articleId: this.recordId })
            .then(result => {
                this.viewCount = result;
            })
            .catch(error => {
                console.error('Error incrementing view count', error);
            });
    }
}
