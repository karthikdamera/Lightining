public class OneAccountController {
    
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [
            SELECT Id, Name, Industry, Type
            FROM Account
            ORDER BY LastModifiedDate DESC
            LIMIT 10
        ];
    }

    @AuraEnabled
    public static List<Contact> getContacts(Id accountId) {
        return [
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
            WHERE AccountId = :accountId
        ];
    }
}