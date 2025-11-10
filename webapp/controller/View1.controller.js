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
        },

        onSearchItem1:function(oEvent){
            var querySelect=oEvent.getParameter("query")
            var oFilter= new sap.ui.model.Filter("Company",sap.ui.model.FilterOperator.Contains,querySelect)
            
            var sFilter=[oFilter]
            var carList=this.getView().byId("brandList")
            carList.getBinding("items").filter(sFilter)
        },

        onSearchItem2:function(oEvent){
            var querySelect=oEvent.getParameter("query")
            var oFilter= new sap.ui.model.Filter("M1",sap.ui.model.FilterOperator.Contains,querySelect)
            var oFilter2= new sap.ui.model.Filter("M2",sap.ui.model.FilterOperator.Contains,querySelect)
            var oFilter3= new sap.ui.model.Filter("M3",sap.ui.model.FilterOperator.Contains,querySelect)
            var oFilter4= new sap.ui.model.Filter("M4",sap.ui.model.FilterOperator.Contains,querySelect)
            var oFilter5= new sap.ui.model.Filter("M5",sap.ui.model.FilterOperator.Contains,querySelect)

            var masterFilter=new sap.ui.model.Filter({
                filters:[oFilter,oFilter2, oFilter3, oFilter4, oFilter5],
                and: false
            })
            
            var sFilter=[masterFilter]
            var car=this.getView().byId("c1")
            car.getBinding().filter(sFilter)

            debugger
        }


    });
});