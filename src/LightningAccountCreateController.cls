public with sharing class LightningAccountCreateController {
    
    @AuraEnabled
    public static Account saveAccount(Account account) {
        insert account;
        return account;
    }
}