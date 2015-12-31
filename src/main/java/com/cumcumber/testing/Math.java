package com.cumcumber.testing;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Math {
	
	
  @Given("^I have entered first field \"([^\"]*)\" into the calculator$")
  public void i_have_entered_firs_field_number1_into_the_calculator(int digit1){
	  System.out.println("@Given I have entered " + digit1+ " into the calculator");
  }
  
  @And("^I have entered second field \"([^\"]*)\" into the calculator$")
  public void i_have_entered_second_field_number2_into_the_calculator(int digit2){
	  System.out.println("@And I have entered " + digit2+ " into the calculator");
  }
  
  
  @When("^I press \"([^\"]*)\" on$")
   //When I press "<operationType>" on
  public void 	i_press_add(String operationType, DataTable table){
	  List<Map<String, String>> data = table.asMaps();
	  System.out.println("@When Then I press add " + operationType  +"  "+ data.get(0).get("Country")); 
  }
  
  
  @Then("^Result should be \"([^\"]*)\" on the screen$")
  public void result_should_be_3_on_the_screen(int sum){
	  System.out.println( "@Then Result should be " + sum +" on the screen");
  }
  
}
