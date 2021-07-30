import { logobject } from "../../pageobjects/LoginPage/LoginPage"
import { account } from "../../pageobjects/Accounting/ChartPage"
const accdata = require("../../../fixtures/UserData/accountingdata.json")
const lp = new logobject()
const ac = new account()

Given(/^I login into system and go to accounting page$/, function () {
    lp.login()
    ac.chartpage()
});

When(/^I click on chart of account tab and create new account$/, function () {
    ac.newaccount()
});

Then(/^User account get displayed on webpage$/, function () {
    cy.contains(accdata.accountnumber).should("be.visible")
    cy.screenshot()
});

// create the child account
When(/^I click on chart of account tab and create the child account$/, function () {
    ac.addchildpage()
    ac.addchild()
});

Then(/^Child account get displayed on webpage$/, function () {
    cy.contains(accdata.accountnumber1).should("be.visible")
    cy.screenshot()
});
//delete the account
When(/^I click on chart of account tab and delete the account$/, function () {
    ac.deleteaccount()
});

Then(/^User account get deleted from webpage$/, function () {
    cy.contains(accdata.accountname).should("not.exist")
    cy.screenshot()
});