import { logobject } from "../../pageobjects/LoginPage"
import { customer } from "../../pageobjects/HomePage/CustomerPage"
const custdata = require("../../../fixtures/UserData/customerdata.json")
const lp = new logobject()
const cd = new customer()


Given(/^I login to system and click on customer menu$/, function () {
lp.login()
cd.customerpage()
});

When(/^I fill all data to create customer$/, function () {
cd.addcustomer()
});

Then(/^Customer name should get displayed$/, function () {
cy.get('.result').contains(custdata.fullname).should("be.visible")
cy.screenshot()
});