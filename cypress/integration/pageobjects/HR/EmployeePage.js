/// <reference types="Cypress" />



const hrtab = '[href="/app/hr"]'
const employeepage = '[data-widget-name="b4635436b4"]'
const addemp = "div.standard-actions.flex > button.btn.btn-primary.btn-sm.primary-action"
const firstname = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div:nth-child(2) > div > div > div.form-page > div:nth-child(2) > div > div:nth-child(1) > form > div.frappe-control.input-max-width.has-error > div > div.control-input-wrapper > div.control-input > input"
const middlename = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div:nth-child(2) > div > div > div.form-page > div:nth-child(2) > div > div:nth-child(1) > form > div:nth-child(4) > div > div.control-input-wrapper > div.control-input > input"
const lastname = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div:nth-child(2) > div > div > div.form-page > div:nth-child(2) > div > div:nth-child(1) > form > div:nth-child(5) > div > div.control-input-wrapper > div.control-input > input"
const gender = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div:nth-child(2) > div > div > div.form-page > div:nth-child(2) > div > div:nth-child(2) > form > div:nth-child(3) > div > div.control-input-wrapper > div.control-input > div > div > input"
const dob = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div:nth-child(2) > div > div > div.form-page > div:nth-child(2) > div > div:nth-child(2) > form > div:nth-child(4) > div > div.control-input-wrapper > div.control-input > input"
const doj = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div:nth-child(2) > div > div > div.form-page > div:nth-child(2) > div > div:nth-child(2) > form > div:nth-child(5) > div > div.control-input-wrapper > div.control-input > input"
const savebutton = "div.page-head.flex > div > div > div.flex.col.page-actions.justify-content-end > div.standard-actions.flex > button.btn.btn-primary.btn-sm.primary-action"
const click = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div:nth-child(2) > div > div > div.form-page > div:nth-child(2) > div > div:nth-child(2) > form > div:nth-child(4) > div > div.clearfix > label"
const hrdata = require("../../../fixtures/UserData/HRdata.json")
export class employee {

    employeepage() {
        cy.get(hrtab).click()
        cy.get(employeepage).click()
    }

    addemployee() {
        cy.wait(1000)
        cy.contains("Add Employee").click({ force: true })
        cy.wait(1000)
        cy.get(firstname).type(hrdata.firstname)
        cy.wait(1000)
        cy.get(middlename).type(hrdata.middlename)
        cy.get(lastname).type(hrdata.lastname)
        cy.get(gender).type(hrdata.gender)
        cy.get(dob).type(hrdata.dob)
        cy.get(click).click()
        cy.get(doj).type(hrdata.doj)
        cy.get(click).click()
        cy.get(savebutton).click()
    }
}