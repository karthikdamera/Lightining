({
    handleAccountDelete : function(component, event, helper) {
        helper.refreshAccounts(component);
    },
    handleAccountEdit : function(component, event, helper) {
        helper.refreshAccountContacts(component, event.getParam("recordId"));
    },
    handleAccountQuicksave : function(component, event, helper) {
        helper.refreshAccounts(component);
    },
    handleInit : function(component, event, helper) {
        helper.refreshAccounts(component);
    }
})