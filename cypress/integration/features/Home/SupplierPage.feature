Feature: Check the Supplier Page

Scenario: Add the supplier to system
  Given I login to system and go to supplier page
  When I add the supplier info
  Then Supplier name should get displayed

@focus
Scenario: Edit the supplier details to system
  Given I login to system and go to supplier page
  When I edit the supplier info
  Then Supplier info should get displayed
