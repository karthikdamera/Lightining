({
    handleAccountChange : function(component, event, helper) {
        helper.refreshItems(component, component.get("v.account"));
    },
    handleContactDelete : function(component, event, helper) {
        
        // Propagate the contactDelete event by recreating it
        // in the current context with the same parameters
        var deleteEvent = component.getEvent("delete");
        deleteEvent.setParams(event.getParams()).fire();
    },
    handleContactEdit : function(component, event, helper) {
        var self = this;  // safe reference
        
        // Create an action to invoke the Apex controller method
        // which returns the edit-ready Contact record from
        // Salesforce, based on the given Contact ID
        var setAction = component.get("c.getContact");
        setAction.setParams({
            "recordId": event.getParam("recordId")
        });
        setAction.setCallback(self, function(a) {
            console.log("returned: %o", a.getReturnValue());
            component.set("v.var", a.getReturnValue());
        });
        
        // Enqueue the action
        $A.enqueueAction(setAction);
        
        // Propagate the edit event by recreating and firing
        // an contactEdit event from the current component
        var editEvent = component.getEvent("edit");
        editEvent.setParams(event.getParams()).fire();
    },
    handleInit : function(component, event, helper) {
        helper.initVar(component);
    },
    handleNewContactButtonPress : function(component, event, helper) {
        helper.initVar(component);
    },
    handleQuicksave : function(component, event, helper) {
        console.log("event: %o", event);
        console.log("event.getParams(): %o", event.getParams());
        
        // Process the event appropriately depending on whether
        // the DML operation was an insert or an update
        if (event.getParam("operation") == "insert") {
            
            // Integrate the new record ID into the view
            component.set("v.var.Id", event.getParam("recordId"));
            
            // Add the new record into the view
            var items = component.get("v.items");
            items.push(component.get("v.var"));
            component.set("v.items", items);
        } else if (event.getParam("operation") == "update") {
            
            // Find the index of the existing list item
            // based on the record ID
            var listIndex = helper.findItemsIndexById(component, event.getParam("recordId"));
            
            // Splice the item into the existing array
            // to update the display
            var items = component.get("v.items");
            items.splice(listIndex, 1, component.get("v.var"));
            component.set("v.items", items);
        }
        
        // Propagate the quicksave event by recreating and firing
        // an contactQuicksave event from the current component
        var quicksaveEvent = component.getEvent("quicksave");
        quicksaveEvent.setParams(event.getParams()).fire();
    }
})