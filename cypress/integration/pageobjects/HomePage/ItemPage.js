/// <reference types="Cypress" />
const hometab = "#page-Workspaces > div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col-lg-2.layout-side-section > div > div > div:nth-child(1) > a.desk-sidebar-item.standard-sidebar-item.selected"
const itembutton = "#page-Workspaces > div.container.page-body > div.page-wrapper > div > div.row.layout-main > div.col.layout-main-section-wrapper > div.layout-main-section > div.desk-page > div:nth-child(2) > div.widget-group-body.grid-col-3 > div:nth-child(1) > div.widget-head"
const itemcode = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(3) > div > div.control-input-wrapper > div.control-input > input"
const itemname = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(4) > div > div.control-input-wrapper > div.control-input > input"
const itemgroup = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(5) > div > div.control-input-wrapper > div.control-input > div > div > input"
const unit = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(6) > div > div.control-input-wrapper > div.control-input > div > div > input"
const openingstock = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(8) > div > div.control-input-wrapper > div.control-input > input"
const sellingrate = "body > div.modal.fade.show > div > div > div.modal-body.ui-front > div:nth-child(1) > div > div.form-page > div > div > div > form > div:nth-child(9) > div > div.control-input-wrapper > div.control-input > input"
const savebutton = "body > div.modal.fade.show > div > div > div.modal-footer > div.standard-actions > button.btn.btn-primary.btn-sm.btn-modal-primary"
const actionbutton = '.container > .row > .col > .standard-actions > .actions-btn-group > .btn'
const deletebutton = ".flex.col.page-actions.justify-content-end > div.standard-actions.flex > div.actions-btn-group.show > ul > li:nth-child(6) > a > span"
const confirmdelete = ".modal-footer > .standard-actions > .btn-primary"
const closebutton = " .modal-actions > .btn-modal-close > .icon"

const itemdata = require("../../../fixtures/UserData/itemdata.json")
export class itemobject {
    itempage() {
        cy.get(hometab).click()
        cy.get(itembutton).click()
    }

    additem() {
        cy.contains("Add Item").click()

        cy.get(itemcode).type(itemdata.itemcode)
        cy.wait(5000)
        cy.get(itemname).type(itemdata.itemname)
        cy.get(itemgroup).type(itemdata.itemgroup)

        cy.get(openingstock).type(itemdata.openingstock)
        cy.wait(1000)
        cy.get(sellingrate).type(itemdata.sellingprice)
        cy.get(savebutton).click()
    }

    deleteitem() {
        cy.contains('.list-row', itemdata.itemname).find('input').eq(0).check()
        cy.wait(1000)
        cy.get(actionbutton).eq(1).click({ force: true })
        cy.get(deletebutton).click()
        cy.get(confirmdelete).click({ force: true })
        cy.get(closebutton).click()

    }

}
