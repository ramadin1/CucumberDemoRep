Feature: Login Functionality Feature

In order to ensure Login Functionality works,
I want to run the cucumber test to verify it is working

Scenario: Login Functionality

Given user navigates to http://www.surlatable.com/
When user logs in using Email as “ayuube1977@gmail.com” and Password “abdi2006”
Then login should be successful

Scenario: Login Functionality

Given user navigates to  http://www.surlatable.com/
When user logs in using Email as “invalid-email” and Password “invalid-password”
Then error message should be thrown