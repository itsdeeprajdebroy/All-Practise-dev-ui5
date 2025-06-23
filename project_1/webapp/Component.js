sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/dd/project1/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("sap.dd.project1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            this.setModel(models.createNewModel(), "myModel")

            // enable routing
            this.getRouter().initialize();
        }
    });
});