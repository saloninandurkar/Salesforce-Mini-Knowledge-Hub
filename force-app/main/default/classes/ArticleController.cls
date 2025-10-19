public with sharing class ArticleController {
    
    @AuraEnabled
    public static Decimal incrementViewCount(Id articleId) {
        // Lock the record to prevent concurrency issues
        Knowledge_Article__c art = [SELECT Id, View_Count__c FROM Knowledge_Article__c WHERE Id = :articleId LIMIT 1 FOR UPDATE];
        
        if (art.View_Count__c == null) {
            art.View_Count__c = 1;
        } else {
            art.View_Count__c += 1;
        }
        
        update art;
        
        return art.View_Count__c;
    }
}