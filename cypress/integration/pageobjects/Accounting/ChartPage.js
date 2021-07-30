/// <reference types="Cypress" />
// add the account
const accountingtab = "#page-Workspaces > div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col-lg-2.layout-side-section > div > div > div:nth-child(1) > a:nth-child(3)"
const chartpage = '[data-widget-name="6aa522ecbf"]'
const newbutton = ".container >.row > .col > .standard-actions > .primary-action"
const accountname = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div.frappe-control.input-max-width.has-error > div > div.control-input-wrapper > div.control-input > input"
const accountnumber = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(2) > div > div.control-input-wrapper > div.control-input > input"
const groupcheck = ".modal.show > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > .form-layout > .form-page > .row > .section-body > .form-column > form > .form-group.frappe-control > .checkbox > label > .input-area > .input-with-feedback"
const rootype = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(4) > div > div.control-input-wrapper > div.control-input.flex.align-center > select"
const accounttype = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(5) > div > div.control-input-wrapper > div.control-input.flex.align-center > select"
const currency = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(7) > div > div.control-input-wrapper > div.control-input > div > div > input"
const createbutton = "body > div.modal.fade.show > div > div > div.modal-footer > div.standard-actions > button.btn.btn-primary.btn-sm.btn-modal-primary"
const dismis = ".widget-control > .small"
// edit the customer
const bankname = ":nth-child(1) > .tree-link"
const addchildbutton = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div > div.layout-main-section.frappe-card > div.tree.with-skeleton.opened > ul > li:nth-child(1) > span.tree-node-toolbar.btn-group > button:nth-child(3)"
const deletebutton = "div.container.page-body > div.page-wrapper > div > div.row.layout-main > div > div.layout-main-section.frappe-card > div.tree.with-skeleton.opened > ul > li:nth-child(1) > span.tree-node-toolbar.btn-group > button:nth-child(2)"
const confirmdelete = "body > div.modal.fade.show > div > div > div.modal-footer > div.standard-actions > button.btn.btn-primary.btn-sm.btn-modal-primary"
const close = "body > div.modal.fade.show > div > div > div.modal-header > div.modal-actions > button.btn.btn-modal-close.btn-link > svg"
const childname = ".tree-link > .tree-label"
const accdata = require("../../../fixtures/UserData/accountingdata.json")
export class account {
    chartpage() {
        cy.get(accountingtab).click()
        cy.get(dismis).click()
        cy.get(chartpage).click({ force: true })

    }
    newaccount() {
        cy.wait(1000)
        cy.get(newbutton).eq(1).click({ force: true })
        cy.get(accountname).type(accdata.accountname)
        cy.get(accountnumber).type(accdata.accountnumber)
        cy.get(groupcheck).check()
        cy.get(rootype).select(accdata.roottype)
        cy.get(accounttype).select(accdata.accounttype)
        cy.get(currency).type(accdata.currency)
        cy.get(createbutton).click()
    }
    addchildpage() {

        cy.get(bankname).click({ force: true })
        cy.get(addchildbutton).click({ force: true })

    }
    addchild() {
        cy.wait(1000)

        cy.get(accountname).type(accdata.accountname1)
        cy.get(accountnumber).type(accdata.accountnumber1)
        cy.get(groupcheck).check()
        cy.get(rootype).select(accdata.roottype)
        cy.get(accounttype).select(accdata.accounttype)
        cy.get(currency).type(accdata.currency)
        cy.get(createbutton).click()
    }

    deleteaccount() {
        cy.get(bankname).click({ force: true })
        cy.get(deletebutton).click()
        cy.get(confirmdelete).click({ force: true })
        cy.get(close).click()
        cy.reload()

    }
}