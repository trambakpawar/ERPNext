Feature: Check the Customer Page


Scenario: Add the customer to database
  Given I login to system and click on customer menu
  When I fill all data to create customer
  Then Customer name should get displayed

Scenario: Edit the customer details database
  Given I login to system and click on customer menu
  When I select the customer and edit the fullname
  Then Customer name should get edited


Scenario: Add todo to the customer
  Given I login to system and click on customer menu
  When I select the customer and assign the todo for customer
  Then Customer todo get added

Scenario: Add tags to the customer
  Given I login to system and click on customer menu
  When I select the customer and add the tags for customer
  Then Tags get added to customer

@focus
Scenario: Take print out the customer info
  Given I login to system and click on customer menu
  When I select the customer and print the customer info
  Then customer info get downloaded


Scenario: Delete the customer from database
  Given I login to system and click on customer menu
  When I select the customer and delete it
  Then Customer name should get deleted
