public class EditAccountController {
    
    @AuraEnabled
    public static Id saveAccount(Account newAccount) {
        Id recordId = null;
        
        try {
            upsert newAccount;
            recordId = newAccount.Id;
        }
        catch(System.Exception caught) {
            System.debug('caught: ' + caught);
        }
        
        return recordId;
    }
}