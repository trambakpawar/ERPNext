Feature: Check the Employee Page in HR

Scenario: Add the employee to database
 Given I login to system and go to employee page in HR
  When I fill all the employee info
  Then Employee should get added to system
