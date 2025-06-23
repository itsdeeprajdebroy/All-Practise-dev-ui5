/*global QUnit*/

sap.ui.define([
	"sap/dd/project1/controller/rough.controller"
], function (Controller) {
	"use strict";

	QUnit.module("rough Controller");

	QUnit.test("I should test the rough controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
