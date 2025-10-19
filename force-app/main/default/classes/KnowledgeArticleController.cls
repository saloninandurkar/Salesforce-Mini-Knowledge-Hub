public with sharing class KnowledgeArticleController {

    // Cacheable method to search articles
    @AuraEnabled(cacheable=true)
    public static List<Knowledge_Article__c> searchArticles(String searchKey) {
        return [
            SELECT Id, Name, View_Count__c, CreatedDate
            FROM Knowledge_Article__c
            WHERE Name LIKE :('%' + searchKey + '%')
            ORDER BY CreatedDate DESC
            LIMIT 10
        ];
    }

    // Method to increment view count
    @AuraEnabled
    public static Decimal incrementViewCount(Id articleId) {
        Knowledge_Article__c art = [
            SELECT Id, View_Count__c
            FROM Knowledge_Article__c
            WHERE Id = :articleId
            FOR UPDATE
        ];
        art.View_Count__c = (art.View_Count__c == null ? 1 : art.View_Count__c + 1);
        update art;
        return art.View_Count__c;
    }
}