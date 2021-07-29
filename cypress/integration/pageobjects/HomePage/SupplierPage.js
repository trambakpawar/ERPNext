/// <reference types="Cypress" />
const homepage = "#page-Workspaces > div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col-lg-2.layout-side-section > div > div > div:nth-child(1) > a.desk-sidebar-item.standard-sidebar-item.selected"
// Add customer page
const suppliertab = "#page-Workspaces > div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div.desk-page > div:nth-child(2) > div.widget-group-body.grid-col-3 > div:nth-child(3) > div.widget-head"
const suppliername = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(1) > div > div.control-input-wrapper > div.control-input > input"
const suppliergroup = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(2) > div > div.control-input-wrapper > div.control-input > div > div > input"
const suppliertype = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(3) > div > div.control-input-wrapper > div.control-input.flex.align-center > select"
const savebutton = "body > div.modal.fade.show > div > div > div.modal-footer > div.standard-actions > button.btn.btn-primary.btn-sm.btn-modal-primary"
// edit customer page
const actionbutton = "div.page-head.flex > div > div > div.flex.col.page-actions.justify-content-end > div.standard-actions.flex > div.actions-btn-group > button"
const editbutton = "div.page-head.flex > div > div > div.flex.col.page-actions.justify-content-end > div.standard-actions.flex > div.actions-btn-group.show > ul > li:nth-child(1) > a"
const fieldname = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(1) > div > div.control-input-wrapper > div.control-input.flex.align-center > select"
const value = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(2) > div > div.control-input-wrapper > div.control-input > input"
const updatebutton = "body > div.modal.fade.show > div > div > div.modal-footer > div.standard-actions > button.btn.btn-primary.btn-sm.btn-modal-primary"

const supplydata = require("../../../fixtures/UserData/Supplier.json")
export class supplier {

    supplierpage() {
        cy.get(homepage).click()
        cy.get(suppliertab).click({ force: true })
    }

    addsupplier() {
        cy.contains('button', 'Add Supplier').click()
        cy.wait(1000)
        cy.get(suppliername).type(supplydata.suppliername)
        cy.get(suppliergroup).type(supplydata.suppliergroup)
        cy.get(suppliertype).select(supplydata.suppliertype)
        cy.get(savebutton).click()
    }

    editsupplier() {
        cy.contains('.list-row', supplydata.suppliername).find('input').eq(0).check()
        cy.wait(1000)
        cy.get(actionbutton).eq(1).click({ force: true })
        cy.get(editbutton).click()
        cy.get(fieldname).select(supplydata.fieldname)
        cy.wait(1000)
        cy.get(value).type(supplydata.value)

        cy.get(updatebutton).click()
    }
}
