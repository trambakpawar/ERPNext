Feature: Check home Page

Scenario: Add the item to database
    Given I click on the home tab and click on the item
    When I add the item detailes
    Then Item get added to database