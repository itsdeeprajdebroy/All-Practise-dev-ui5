sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.rr.demokt1.controller.View1", {
        onInit() {
        },

        onItemPress: function(oEvent) {
            const sId = oEvent.getParameters().listItem.getBindingContext().getProperty().ProductID

            this.getOwnerComponent().getRouter().navTo("RouteProductDetail", {
                productID: sId
            })
        }
    });
});