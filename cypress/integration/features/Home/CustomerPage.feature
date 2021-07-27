Feature: Check the Customer Page

Scenario: Add the customer to database
 Given I login to system and click on customer menu
  When I fill all data to create customer
  Then Customer name should get displayed
