const homepage = "#page-Workspaces > div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col-lg-2.layout-side-section > div > div > div:nth-child(1) > a.desk-sidebar-item.standard-sidebar-item.selected"
const customerpage = "#page-Workspaces > div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div:nth-child(2) > div:nth-child(2) > div.widget-group-body.grid-col-3 > div:nth-child(2)"
const addbutton = "div > div.flex.col.page-actions.justify-content-end > div.standard-actions.flex > button.btn.btn-primary.btn-sm.primary-action > span"
const fullname = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(1) > div > div > form > div.frappe-control.input-max-width.has-error > div > div.control-input-wrapper > div.control-input > input"
const company = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(1) > div > div > form > div:nth-child(2) > div > div.control-input-wrapper > div.control-input.flex.align-center > select"
const contactdetailes = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(2) > div.section-head.collapsed"
const addressdetails = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(3) > div.section-head.collapsed"
const mailid = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(2) > div.section-body > div:nth-child(1) > form > div > div > div.control-input-wrapper > div.control-input > input"
const mobile = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(2) > div.section-body > div:nth-child(2) > form > div > div > div.control-input-wrapper > div.control-input > input"
const address1 = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(3) > div.section-body > div:nth-child(1) > form > div:nth-child(1) > div > div.control-input-wrapper > div.control-input > input"
const city = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(3) > div.section-body > div:nth-child(2) > form > div:nth-child(1) > div > div.control-input-wrapper > div.control-input > input"
const state = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(3) > div.section-body > div:nth-child(2) > form > div:nth-child(2) > div > div.control-input-wrapper > div.control-input > input"
const zipcode = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(3) > div.section-body > div:nth-child(1) > form > div:nth-child(3) > div > div.control-input-wrapper > div.control-input > input"
const country = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div:nth-child(3) > div.section-body > div:nth-child(2) > form > div:nth-child(3) > div > div.control-input-wrapper > div.control-input > div > div > input"
const savebutton = "body > div.modal.fade.show > div > div > div.modal-footer > div.standard-actions > button.btn.btn-primary.btn-sm.btn-modal-primary"

const custdata = require("../../../fixtures/UserData/customerdata.json")
export class customer {
    customerpage() {
        cy.get(homepage).click()
        cy.get(customerpage).click()
    }
    addcustomer() {
        cy.get(addbutton).click()
        cy.get(fullname).type(custdata.fullname)
        cy.get(company).select(custdata.company)
        cy.get(contactdetailes).click()
        cy.get(mailid).type(custdata.mailid)
        cy.get(mobile).type(custdata.mobile)
        cy.get(addressdetails).click()
        cy.get(address1).type(custdata.address)
        cy.get(city).type(custdata.city)
        cy.get(state).type(custdata.state)
        cy.get(zipcode).type(custdata.zipcode)
        cy.get(country).type(custdata.country)
        cy.get(savebutton).click()
    }

}