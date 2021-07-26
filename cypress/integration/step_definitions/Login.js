import { logobject } from "../pageobjects/LoginPage"
const lp = new logobject()

Given(/^I visit the url and click on login$/, function () {
    lp.visit()

});

When(/^I submit the username and password$/, function () {
    lp.loginsystem()
});

Then(/^user must login to system$/, function () {
    cy.get(".container > .row").contains("Home").should("be.visible")
    cy.screenshot()
});