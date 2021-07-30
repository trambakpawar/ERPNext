import { logobject } from "../../pageobjects/LoginPage/LoginPage"
import { itemobject } from "../../pageobjects/HomePage/ItemPage"
const itemdata = require("../../../fixtures/UserData/itemdata.json")
const lp = new logobject()
const it = new itemobject()

Given(/^I click on the home tab and click on the item$/, function () {
    lp.login()
    it.itempage()
});

When(/^I add the item detailes$/, function () {
    it.additem()
});


Then(/^Item get added to database$/, function () {
    cy.get(".result").contains(itemdata.itemname).should("be.visible")
    cy.screenshot()
});


When(/^I select the item and delete it$/, function () {
    it.deleteitem()
});


Then(/^Item should get removed from database$/, function () {
    cy.get(".result").contains(itemdata.itemname).should("not.exist")
    cy.screenshot()
});
