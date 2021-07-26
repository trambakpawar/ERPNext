Feature: Login to ERPNext

Scenario: Login to the system
    Given I visit the url and click on login
      When I submit the username and password
      Then user must login to system



