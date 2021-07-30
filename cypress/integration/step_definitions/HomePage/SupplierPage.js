import { logobject } from "../../pageobjects/LoginPage/LoginPage"
import { supplier } from "../../pageobjects/HomePage/SupplierPage"
const supplydata = require("../../../fixtures/UserData/Supplier.json")

const lp = new logobject()
const sp = new supplier()
Given(/^I login to system and go to supplier page$/, function () {
    lp.login()
    sp.supplierpage()
});
// Add supplier
When(/^I add the supplier info$/, function () {
    sp.addsupplier()
});

Then(/^Supplier name should get displayed$/, function () {
    cy.get('.result').contains(supplydata.suppliername).should("be.visible")
    cy.screenshot()
});

// edit supplier
When(/^I edit the supplier info$/, function () {
    sp.editsupplier()
});

Then(/^Supplier info should get displayed$/, function () {

    cy.get('.result').contains(supplydata.value).should("be.visible")

    cy.screenshot()
});

