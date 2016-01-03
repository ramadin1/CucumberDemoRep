$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("main/resources/com/cumcumber/testing/Addition.feature");
formatter.feature({
  "line": 1,
  "name": "Addition",
  "description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be told the sum of two numbers",
  "id": "addition",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Add one two numbers",
  "description": "",
  "id": "addition;add-one-two-numbers",
  "type": "scenario_outline",
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
  "name": "I have entered first field \"\u003cnum1\u003e\" into the calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I have entered second field \"\u003cnum2\u003e\" into the calculator",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I press \"\u003coperationType\u003e\" on",
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
  "name": "Result should be \"\u003csum\u003e\" on the screen",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "addition;add-one-two-numbers;",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "sum",
        "operationType"
      ],
      "line": 17,
      "id": "addition;add-one-two-numbers;;1"
    },
    {
      "cells": [
        "1",
        "2",
        "3",
        "addition"
      ],
      "line": 18,
      "id": "addition;add-one-two-numbers;;2"
    },
    {
      "cells": [
        "2",
        "2",
        "4",
        "subtraction"
      ],
      "line": 19,
      "id": "addition;add-one-two-numbers;;3"
    }
  ],
  "keyword": "Examples"
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
  "duration": 294201716,
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
  "duration": 5430591,
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
  "duration": 7840276,
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
  "duration": 4626082,
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
  "duration": 3918858,
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
  "duration": 4417435,
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
  "duration": 5771083,
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
  "duration": 3595647,
  "status": "passed"
});
});