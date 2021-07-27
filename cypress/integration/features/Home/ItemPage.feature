Feature: Check home Page

Scenario: Add the item to database
    Given I click on the home tab and click on the item
    When I add the item detailes
    Then Item get added to database

Scenario: Delete the item from database
    Given I click on the home tab and click on the item
    When I select the item and delete it
    Then Item should get removed from database