({
    refreshAccounts : function(component) {
        var self = this;  // safe reference
        
        // Create an action to invoke the Apex controller method
        // which returns a list of Account records to present
        // in the current view
        var refreshAction = component.get("c.getAccounts");
        refreshAction.setCallback(self, function(a) {
            console.log("returned: %o", a.getReturnValue());
            component.set("v.accounts", a.getReturnValue());
        });
        
        // Enqueue the action
        $A.enqueueAction(refreshAction);
    }
})