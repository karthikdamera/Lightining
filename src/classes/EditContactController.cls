public class EditContactController {
    
    @AuraEnabled
    public static Id saveContact(Contact newContact) {
        Id recordId = null;
        
        try {
            upsert newContact;
            recordId = newContact.Id;
        }
        catch(System.Exception caught) {
            System.debug('caught: ' + caught);
        }
        
        return recordId;
    }
}