sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("splitapps.controller.View1", {
        onInit() {
        },
        onInit: function () {
            var oModel = new JSONModel();
            oModel.loadData("/model/data.json");
            this.getView().setModel(oModel, "dataModel");
        },

        selectList: function(oEvent){
            var oItem=oEvent.getSource()
            var sPath=oItem.getBindingContext("dataModel").getPath()
            var oSplitApp = this.byId("sapp")
            var oModelPage = this.byId("master2");
            // var oView2=oSplitApp.getDetailPages()[0]
            oModelPage.bindElement({
                path: sPath,
                model: "dataModel"
            })
            oSplitApp.toMaster(oModelPage);
        },

        selectCar:function(oEvent){
            var oItem=oEvent.getSource()
            var sPath=oItem.getBindingContext("dataModel").getPath()
            var oSplitApp = this.byId("sapp")
            var oView2=oSplitApp.getDetailPages()[0]
            oView2.bindElement({
                path: sPath,
                model: "dataModel"
            })
            oSplitApp.toDetail(oView2);
            this.byId("carTable").setVisible(true);
        },

        selectCar1:function(oEvent){
            var oItem=oEvent.getSource()
            var sPath=oItem.getBindingContext("dataModel").getPath()
            var oSplitApp = this.byId("sapp")
            var oView2=oSplitApp.getDetailPages()[1]
            oView2.bindElement({
                path: sPath,
                model: "dataModel"
            })
            oSplitApp.toDetail(oView2);
            this.byId("carTable1").setVisible(true)
        },

        selectCar2:function(oEvent){
            var oItem=oEvent.getSource()
            var sPath=oItem.getBindingContext("dataModel").getPath()
            var oSplitApp = this.byId("sapp")
            var oView2=oSplitApp.getDetailPages()[2]
            oView2.bindElement({
                path: sPath,
                model: "dataModel"
            })
            oSplitApp.toDetail(oView2);
            this.byId("carTable2").setVisible(true)
        },

        selectCar3:function(oEvent){
            var oItem=oEvent.getSource()
            var sPath=oItem.getBindingContext("dataModel").getPath()
            var oSplitApp = this.byId("sapp")
            var oView2=oSplitApp.getDetailPages()[3]
            oView2.bindElement({
                path: sPath,
                model: "dataModel"
            })
            oSplitApp.toDetail(oView2);
            this.byId("carTable3").setVisible(true)
        },

        selectCar4:function(oEvent){
            var oItem=oEvent.getSource()
            var sPath=oItem.getBindingContext("dataModel").getPath()
            var oSplitApp = this.byId("sapp")
            var oView2=oSplitApp.getDetailPages()[4]
            oView2.bindElement({
                path: sPath,
                model: "dataModel"
            })
            oSplitApp.toDetail(oView2);
            this.byId("carTable4").setVisible(true)
        },

        onPressDetailBack: function () {
            var oSplitApp = this.byId("sapp");
            oSplitApp.backMaster();
        }


    });
});