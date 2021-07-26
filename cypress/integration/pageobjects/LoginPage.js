/// <reference types="Cypress" />
const login = "#navbarSupportedContent > ul.ml-auto.navbar-nav > li.nav-item > a"
const email = "#login_email"
const password = "#login_password"
const loginbutton = "#page-login > div > main > div.page_content > div > section.for-login > div.login-content.page-card > form > div.page-card-actions > button"
const logindata = require("../../fixtures/CommanData/LoginInfo.json")

export class logobject {

    visit() {
        cy.visit(logindata.baseurl)
        cy.get(login).click()
    }

    loginsystem() {
        cy.get(email).clear()
        cy.get(email).type(logindata.email)
        cy.get(password).clear()
        cy.get(password).type(logindata.password)
        cy.get(loginbutton).click()
        cy.wait(1000)

    }

    login() {
        cy.visit(logindata.baseurl)
        cy.get(login).click()
        cy.get(email).clear()
        cy.get(email).type(logindata.email)
        cy.get(password).clear()
        cy.get(password).type(logindata.password)
        cy.get(loginbutton).click()
      
        cy.log("Login Successful")

    }


}