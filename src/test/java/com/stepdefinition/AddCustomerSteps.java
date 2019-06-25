package com.stepdefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddCustomerSteps {
	
	static WebDriver driver;
	@Given("The user is in telecom page")
	public void the_user_is_in_telecom_page() {
		  System.setProperty("webdriver.chrome.driver","C:\\Users\\GT Sanatorium\\Bala\\Cucumber\\driver\\chromedriver.exe" );
		    driver= new ChromeDriver();
		    driver.get("http://demo.guru99.com/telecom/");
	}

	@Given("The user click on add customer")
	public void the_user_click_on_add_customer() {
		driver.findElement(By.xpath("//a[text()='Add Customer'][1]")).click();
	}
	@When("The user is filling all the details")
	public void the_user_is_filling_all_the_details(DataTable dataTable) {
	    List<String> CustomerdetailsList = dataTable.asList(String.class);
	    driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys(CustomerdetailsList.get(0));
		driver.findElement(By.id("lname")).sendKeys(CustomerdetailsList.get(1));
		driver.findElement(By.id("email")).sendKeys(CustomerdetailsList.get(2));
		driver.findElement(By.name("addr")).sendKeys(CustomerdetailsList.get(3));
		driver.findElement(By.name("telephoneno")).sendKeys(CustomerdetailsList.get(4));
	}	
@When("The user is filling all details")
	public void the_user_is_filling_all_detailss(DataTable dtable) {
		Map<String, String> CustomerdetailsMap = dtable.asMap(String.class, String.class);
		driver.findElement(By.xpath("//label[@for='done']")).click();
		driver.findElement(By.id("fname")).sendKeys(CustomerdetailsMap.get("fname"));
		driver.findElement(By.id("lname")).sendKeys(CustomerdetailsMap.get("lname"));
		driver.findElement(By.id("email")).sendKeys(CustomerdetailsMap.get("email"));
		driver.findElement(By.name("addr")).sendKeys(CustomerdetailsMap.get("address"));
		driver.findElement(By.name("telephoneno")).sendKeys(CustomerdetailsMap.get("phoneno"));
	}



	@When("The user click on submit button")
	public void the_user_click_on_submit_button() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("The user should see the customer id")
	public void the_user_should_see_the_customer_id() {
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	}
}
