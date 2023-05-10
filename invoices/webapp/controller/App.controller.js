sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller , MessageToast, JSONModel, ResourceModel) {
        "use strict";

        return Controller.extend("logaligroup.invoices.controller.App", {
            onInit: function () {
              var oData= {
                 recipient : {
                      name : "World"
                 }
              }; 
              var oModel = new JSONModel(oData);
              this.getView().setModel(oModel);
              
              //set i18n model on the view
              var i18nModel = new ResourceModel({ bundleName : "logaligroup.invoices.i18n.i18n"});
              this.getView().setModel(i18nModel, "i18n");
            },

            onShowHello: function(){
                MessageToast.show("Hola Mundo");
            }
        });
    });
