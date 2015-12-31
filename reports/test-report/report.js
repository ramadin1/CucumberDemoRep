$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/cumcumber/testing/Addition.feature");
formatter.feature({
  "line": 1,
  "name": "Addition",
  "description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be told the sum of two numbers",
  "id": "addition",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Add one two numbers",
  "description": "",
  "id": "addition;add-one-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I have entered first field 1 into the calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I have entered second field 2 into the calculator",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I press add",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Result should be 3 on the screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "Math.i_have_entered_firs_field_number1_into_the_calculator(int)"
});
formatter.result({
  "duration": 441449635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 28
    }
  ],
  "location": "Math.i_have_entered_second_field_number2_into_the_calculator(int)"
});
formatter.result({
  "duration": 510750,
  "status": "passed"
});
formatter.match({
  "location": "Math.i_press_add()"
});
formatter.result({
  "duration": 497949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "Math.result_should_be_3_on_the_screen(int)"
});
formatter.result({
  "duration": 542112,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Add two digit numbers",
  "description": "",
  "id": "addition;add-two-digit-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I have entered first field 10 into the calculator",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I have entered second field 20 into the calculator",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I press add",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Result should be 30 on the screen",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 27
    }
  ],
  "location": "Math.i_have_entered_firs_field_number1_into_the_calculator(int)"
});
formatter.result({
  "duration": 705962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 28
    }
  ],
  "location": "Math.i_have_entered_second_field_number2_into_the_calculator(int)"
});
formatter.result({
  "duration": 595236,
  "status": "passed"
});
formatter.match({
  "location": "Math.i_press_add()"
});
formatter.result({
  "duration": 1058623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 17
    }
  ],
  "location": "Math.result_should_be_3_on_the_screen(int)"
});
formatter.result({
  "duration": 1392723,
  "status": "passed"
});
});