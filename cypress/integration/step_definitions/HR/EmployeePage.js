import { logobject } from "../../pageobjects/LoginPage/LoginPage"
import { employee } from "../../pageobjects/HR/EmployeePage"
const accdata = require("../../../fixtures/UserData/accountingdata.json")
const lp = new logobject()
const emp = new employee()


const hrdata = require("../../../fixtures/UserData/HRdata.json")
Given(/^I login to system and go to employee page in HR$/, function () {
    lp.login()
    emp.employeepage()

});

When(/^I fill all the employee info$/, function () {
    emp.addemployee()
});

Then(/^Employee should get added to system$/, function () {
    cy.contains(hrdata.firstname).should("be.visible")
    cy.screenshot()
});
