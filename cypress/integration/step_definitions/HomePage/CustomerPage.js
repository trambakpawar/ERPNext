import { logobject } from "../../pageobjects/LoginPage/LoginPage"
import { customer } from "../../pageobjects/HomePage/CustomerPage"
const custdata = require("../../../fixtures/UserData/customerdata.json")
const lp = new logobject()
const cd = new customer()
const assignto = ".list-group-by-fields > :nth-child(1) > .btn"
const showtag = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col-lg-2.layout-side-section > div > ul:nth-child(2) > div.sidebar-section.filter-section > div.list-tags > li.sidebar-action.show-tags > a"

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


When(/^I select the customer and edit the fullname$/, function () {
    cd.editcustomer()
});

Then(/^Customer name should get edited$/, function () {
    cy.get('.result').contains(custdata.name).should("be.visible")
    cy.screenshot()
});

When(/^I select the customer and delete it$/, function () {
    cd.deletecustomer()
});

Then(/^Customer name should get deleted$/, function () {
    cy.get('.result').contains(custdata.fullname).should("not.exist")
    cy.screenshot()
});


When(/^I select the customer and assign the todo for customer$/, function () {
    cd.assigntodo()
});

Then(/^Customer todo get added$/, function () {
    cy.get(assignto).click().then(() => {
        cy.contains('.group-by-value', 'Me').should("be.visible")
        cy.screenshot()
    })
});

When(/^I select the customer and assign the todo for customer$/, function () {
    cd.assigntodo()
});

Then(/^Customer todo get added$/, function () {
    cy.get(assignto).click().then(() => {
        cy.contains('.group-by-value', 'Me').should("be.visible")
        cy.screenshot()
    })
});

When(/^I select the customer and add the tags for customer$/, function () {
    cd.assigntags()
});

Then(/^Tags get added to customer$/, function () {
    cy.get(showtag).click().then(() => {
        cy.contains('.result', custdata.tag).should("be.visible")
        cy.screenshot()
    })
});


When(/^I select the customer and print the customer info$/, function () {
    cd.printdata()
});

Then(/^customer info get downloaded$/, function () {
    cy.readFile('cypress/downloads/Customer.pdf')
    cy.screenshot()
});