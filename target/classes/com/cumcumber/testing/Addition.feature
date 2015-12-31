Feature: Addition
	 In order to avoid silly mistakes
	 As a math idiot
	 I want to be told the sum of two numbers 
@login
Scenario Outline: Add one two numbers

	Given I have entered first field "<num1>" into the calculator
	And I have entered second field "<num2>" into the calculator
	When I press "<operationType>" on
	| Industry      | Country        | 
	| IT      		| Germany        |
	
	Then Result should be "<sum>" on the screen
	
Examples:
| num1 | num2 | sum | operationType |
| 1	   | 2    | 3	| addition		|
| 2	   | 2    | 4	| subtraction   |