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
}