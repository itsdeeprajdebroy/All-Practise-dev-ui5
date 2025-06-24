sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.rr.demokt1.controller.ProductDetail", {
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("RouteProductDetail").attachMatched(this._onPatternMatch, this)
        },

        _onPatternMatch: function(oEvent) {
            const productID = oEvent.getParameter("arguments").productID;
            const sPath = '/Products(' + productID + ')'
            console.log(sPath)
            this.getView().bindElement({
                path : sPath
            })
        }
    });
});