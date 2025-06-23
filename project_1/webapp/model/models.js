sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createNewModel: function() {
            const oData = {
                "companies": [
                  {
                    "name": "SAP",
                    "departments": [
                      {
                        "dept": "UI5",
                        "employees": [
                          { "name": "Raj", "active": true },
                          { "name": "Sam", "active": false }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Infosys",
                    "departments": [
                      {
                        "dept": "BTP",
                        "employees": [
                          { "name": "Ankit", "active": true },
                          { "name": "Neha", "active": true }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "TCS",
                    "departments": [
                      {
                        "dept": "HANA",
                        "employees": [
                          { "name": "Sneha", "active": false },
                          { "name": "Karan", "active": true }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Wipro",
                    "departments": [
                      {
                        "dept": "Analytics",
                        "employees": [
                          { "name": "Mehul", "active": true },
                          { "name": "Priya", "active": false }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Accenture",
                    "departments": [
                      {
                        "dept": "Fiori",
                        "employees": [
                          { "name": "Pooja", "active": true },
                          { "name": "Vikas", "active": true }
                        ]
                      }
                    ]
                  }
                ]
              }

            const oModelNew = new JSONModel(oData)
            return oModelNew
        }


    };

});