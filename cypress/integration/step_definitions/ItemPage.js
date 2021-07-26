import { logobject } from "../../integration/pageobjects/LoginPage"
import { itemobject } from "../../integration/pageobjects/ItemPage"
const itemdata = require("../../fixtures/CommanData/itemdata.json")
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
    cy.get("body").contains(itemdata.itemname).should("be.visible")
    cy.screenshot()
});

