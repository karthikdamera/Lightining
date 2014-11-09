({
    handleAccountDelete : function(component, event, helper) {
        helper.refreshAccounts(component);
    },
    handleAccountEdit : function(component, event, helper) {
        component.set("v.accountId", event.getParam("recordId"));
    },
    handleAccountQuicksave : function(component, event, helper) {
        helper.refreshAccounts(component);
    },
    handleInit : function(component, event, helper) {
        helper.refreshAccounts(component);
    }
})