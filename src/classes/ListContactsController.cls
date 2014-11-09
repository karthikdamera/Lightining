public class ListContactsController {
    
    @AuraEnabled
    public static Id deleteContact(Id recordId) {
        Id oldContactId = null;
        
        try {
            delete new Contact(Id = recordId);
            oldContactId = recordId;
        }
        catch (System.Exception caught) {
            System.debug('caught: ' + caught);
        }
        
        return oldContactId;
    }
    
    @AuraEnabled
    public static Contact getContact(Id recordId) {
        List<Contact> matchingRecords = [
            SELECT Id, Name,
                AccountId,
                Email,
                FirstName,
                HomePhone,
                LastName,
                MobilePhone,
                OtherPhone,
                Phone
            FROM Contact
            WHERE Id = :recordId
        ];
        
        return matchingRecords.isEmpty() ? null : matchingRecords.get(0);
    }
    
    @AuraEnabled
    public static Contact newContact() {
        return (Contact)Contact.sObjectType.newSObject(null, true);
    }
}