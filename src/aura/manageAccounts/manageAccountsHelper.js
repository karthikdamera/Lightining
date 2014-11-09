({
    findItemsIndexById : function(component, recordId) {
        var listIndex = -1;  // assume not found
        var items = component.get("v.items");
        items.forEach(function(element, index, array) {
            if (element.Id == recordId)
                listIndex = index;
        });
        return listIndex;
    },
    initVar : function(component) {
        var self = this;  // safe reference
        
        // Create an action to invoke the Apex controller method
        // which returns a new Account object with all default
        // values pre-filled
        var initAction = component.get("c.newAccount");
        initAction.setCallback(self, function(a) {
            console.log("returned: %o", a.getReturnValue());
            component.set("v.var", a.getReturnValue());
        });
        
        // Enqueue the action
        $A.enqueueAction(initAction);
    }
})