Feature: Check the Account Page

Scenario: Add the account to chart
 Given I login into system and go to accounting page
  When I click on chart of account tab and create new account
  Then User account get displayed on webpage


Scenario: Create the child account
 Given I login into system and go to accounting page
  When I click on chart of account tab and create the child account
  Then Child account get displayed on webpage


Scenario: Delete the account from chart
 Given I login into system and go to accounting page
  When I click on chart of account tab and delete the account
  Then User account get deleted from webpage