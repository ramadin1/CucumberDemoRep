$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/cumcumber/testing/Addition.feature");
formatter.feature({
  "line": 1,
  "name": "Addition",
  "description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be told the sum of two numbers",
  "id": "addition",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 18,
  "name": "Add one two numbers",
  "description": "",
  "id": "addition;add-one-two-numbers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have entered first field \"1\" into the calculator",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I have entered second field \"2\" into the calculator",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I press \"addition\" on",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "Industry",
        "Country"
      ],
      "line": 11
    },
    {
      "cells": [
        "IT",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Result should be \"3\" on the screen",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "Math.i_have_entered_firs_field_number1_into_the_calculator(int)"
});
formatter.result({
  "duration": 961021164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "Math.i_have_entered_second_field_number2_into_the_calculator(int)"
});
formatter.result({
  "duration": 344339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "addition",
      "offset": 9
    }
  ],
  "location": "Math.i_press_add(String,DataTable)"
});
formatter.result({
  "duration": 10072887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "Math.result_should_be_3_on_the_screen(int)"
});
formatter.result({
  "duration": 371861,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Add one two numbers",
  "description": "",
  "id": "addition;add-one-two-numbers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I have entered first field \"2\" into the calculator",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I have entered second field \"2\" into the calculator",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I press \"subtraction\" on",
  "matchedColumns": [
    3
  ],
  "rows": [
    {
      "cells": [
        "Industry",
        "Country"
      ],
      "line": 11
    },
    {
      "cells": [
        "IT",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Result should be \"4\" on the screen",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "Math.i_have_entered_firs_field_number1_into_the_calculator(int)"
});
formatter.result({
  "duration": 2219005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "Math.i_have_entered_second_field_number2_into_the_calculator(int)"
});
formatter.result({
  "duration": 1395278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "subtraction",
      "offset": 9
    }
  ],
  "location": "Math.i_press_add(String,DataTable)"
});
formatter.result({
  "duration": 1914988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 18
    }
  ],
  "location": "Math.result_should_be_3_on_the_screen(int)"
});
formatter.result({
  "duration": 876850,
  "status": "passed"
});
formatter.uri("com/cumcumber/testing/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality Feature",
  "description": "\r\nIn order to ensure Login Functionality works,\r\nI want to run the cucumber test to verify it is working",
  "id": "login-functionality-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality-feature;login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user navigates to http://www.surlatable.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using Email as “ayuube1977@gmail.com” and Password “abdi2006”",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 12,
  "name": "Login Functionality",
  "description": "",
  "id": "login-functionality-feature;login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user navigates to  http://www.surlatable.com/",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user logs in using Email as “invalid-email” and Password “invalid-password”",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "error message should be thrown",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});