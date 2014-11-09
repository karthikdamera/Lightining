({
    handleQuicksave : function(component, event, helper) {
        if (event.getParam("recordId")) {
            if (event.getParam("operation") == "insert") {
                component.set("v.value.Id", event.getParam("recordId"));
            }
        }
    },
    handleSaveButtonPress : function(component, event, helper) {
        var self = this;  // safe reference
        
        // Create an action to invoke the Apex controller method
        // which inserts or updates the passed Contact object,
        // depending on whether the Contact is new or existing.
        // Upon successfully completing DML operation, the
        // salesforce.com ID of the record is returned.
        var saveAction = component.get("c.saveContact");
        saveAction.setParams({
            "newContact": component.get("v.value")
        });
        saveAction.setCallback(self, function(a) {
            var recordId = a.getReturnValue();
            
            if (recordId == null) {
                alert("See Apex Debug Log");
            } else {
                var quicksaveEvent = component.getEvent("quicksave");
                quicksaveEvent.setParams({
                    "operation": component.get("v.value.Id") ? "update" : "insert",
                    "recordId": recordId
                }).fire();
            }
        });
        
        // Enqueue the action
        $A.enqueueAction(saveAction);
    }
})