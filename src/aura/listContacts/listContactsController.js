({
    handleContactDelete : function(component, event, helper) {
        var items = component.get("v.items");
        items.splice(event.getParam("listIndex"), 1);
        component.set("v.items", items);
    },
    handleDelClick : function(component, event, helper) {
        var self = this;  // safe reference
        
        // Create an action to invoke the Apex controller method
        // which will delete an Contact record based on a given
        // Contact ID
        var deleteAction = component.get("c.deleteContact");
        deleteAction.setParams({
            "recordId": event.target.dataset.recordId
        });
        deleteAction.setCallback(self, function(a) {
            console.log("returned: %o", a.getReturnValue());
            var recordId = a.getReturnValue();
            
            if (recordId == null) {
                alert("See Apex Debug Log");
            } else {
                var deleteEvent = component.getEvent("delete");
                deleteEvent.setParams({
                    "listIndex": event.target.dataset.index,
                    "oldRecord": component.get("v.items")[event.target.dataset.index]
                }).fire();
            }
        });
        
        // Enqueue the action
        $A.enqueueAction(deleteAction);
    },
    handleEditClick : function(component, event, helper) {
        var editEvent = component.getEvent("edit");
        editEvent.setParams({
            "listIndex": event.target.dataset.index,
            "recordId": event.target.dataset.recordId
        }).fire();
    }
})