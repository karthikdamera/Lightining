public class ListAccountsController {
    
    @AuraEnabled
    public static Id deleteAccount(Id recordId) {
        Id oldAccountId = null;
        
        try {
            delete new Account(Id = recordId);
            oldAccountId = recordId;
        }
        catch (System.Exception caught) {
            System.debug('caught: ' + caught);
        }
        
        return oldAccountId;
    }
    
    @AuraEnabled
    public static Account getAccount(Id recordId) {
        List<Account> matchingRecords = [
            SELECT Id, Name, Industry, Type
            FROM Account
            WHERE Id = :recordId
        ];
        
        return matchingRecords.isEmpty() ? null : matchingRecords.get(0);
    }
    
    @AuraEnabled
    public static Account newAccount() {
        return (Account)Account.sObjectType.newSObject(null, true);
    }
}