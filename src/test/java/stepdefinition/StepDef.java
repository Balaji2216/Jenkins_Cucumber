package stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.TestRunner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {

	
	WebDriver driver = TestRunner.driver;
	
	@Given("^user launch the adactin application$")
	public void user_launch_the_adactin_application() throws Throwable {
		
		driver.get("https://adactinhotelapp.com/");
	}

	@When("^user enter the username in username field$")
	public void user_enter_the_username_in_username_field() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='username']")).sendKeys("Jivita04");
	}

	@When("^user enter the password in the password field$")
	public void user_enter_the_password_in_the_password_field() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("123456");

	}

	@Then("^user click the login button and it navigate to next page$")
	public void user_click_the_login_button_and_it_navigate_to_next_page() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='login']")).click();

	}
	
	@When("^user select the location from location dropdown$")
	public void user_select_the_location_from_location_dropdown() throws Throwable {
		
		WebElement location = driver.findElement(By.xpath("//select[@id='location']"));
		Select s = new Select(location);
		s.selectByIndex(4);

	}

	@When("^user select the hotel from hotel dropdown$")
	public void user_select_the_hotel_from_hotel_dropdown() throws Throwable {
		
		WebElement hotels = driver.findElement(By.xpath("//select[@id='hotels']"));
		Select s1 = new Select(hotels);
		s1.selectByValue("Hotel Sunshine");

	}

	@When("^user select the roomtype from roomtype dropdown$")
	public void user_select_the_roomtype_from_roomtype_dropdown() throws Throwable {
		
		WebElement roomtype = driver.findElement(By.xpath("//select[@id='room_type']"));
		Select s2 = new Select(roomtype);
		s2.selectByVisibleText("Super Deluxe");

	}

	@When("^user select the number of rooms from number of rooms dropdown$")
	public void user_select_the_number_of_rooms_from_number_of_rooms_dropdown() throws Throwable {
		
		WebElement no_ofrooms = driver.findElement(By.xpath("//select[@id='room_nos']"));
		Select s3 = new Select(no_ofrooms);
		s3.selectByIndex(1);

	}

	@When("^user select the number of adults from adult per room dropdown$")
	public void user_select_the_number_of_adults_from_adult_per_room_dropdown() throws Throwable {
		
		WebElement adults = driver.findElement(By.xpath("//select[@id='adult_room']"));
		Select s4 = new Select(adults);
		s4.selectByVisibleText("2 - Two");

	}

	@When("^user select the number of childrens from children per room dropdown$")
	public void user_select_the_number_of_childrens_from_children_per_room_dropdown() throws Throwable {
		
		WebElement childs = driver.findElement(By.xpath("//select[@id='child_room']"));
		Select s5 = new Select(childs);
		s5.selectByIndex(2);

	}

	@Then("^user click on the search button and it navigate to select hotel page$")
	public void user_click_on_the_search_button_and_it_navigate_to_select_hotel_page() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='Submit']")).click();

	}
	
	@When("^user select the radio button of the selected hotel$")
	public void user_select_the_radio_button_of_the_selected_hotel() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='radiobutton_0']")).click();

	}

	@Then("^user click on the continue button and it navigate to book a hotel page$")
	public void user_click_on_the_continue_button_and_it_navigate_to_book_a_hotel_page() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='continue']")).click();

	}
	
	@When("^user has to enter first name on the firstname field$")
	public void user_has_to_enter_first_name_on_the_firstname_field() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='first_name']")).sendKeys("Rajini");

	}

	@When("^user has to enter last name on the lastname field$")
	public void user_has_to_enter_last_name_on_the_lastname_field() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='last_name']")).sendKeys("Kanth");

	}

	@When("^user has to enter address on the billing address field$")
	public void user_has_to_enter_address_on_the_billing_address_field() throws Throwable {
		
		driver.findElement(By.xpath("//textarea[@id='address']"))
		.sendKeys("No.108, Dubai kuruku sandhu, Dubai Main road, Dubai");

	}

	@When("^user has to enter credit card no on the credit card no field$")
	public void user_has_to_enter_credit_card_no_on_the_credit_card_no_field() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='cc_num']")).sendKeys("1234 5678 1234 5678");

	}

	@When("^user has to select credit card type on the credit card type field dropdown$")
	public void user_has_to_select_credit_card_type_on_the_credit_card_type_field_dropdown() throws Throwable {
		
		WebElement cctype = driver.findElement(By.xpath("//select[@id='cc_type']"));
		Select c = new Select(cctype);
		c.selectByIndex(1);

	}

	@When("^user has to select month dropdown and select year dropdown on the expiry date field$")
	public void user_has_to_select_month_dropdown_and_select_year_dropdown_on_the_expiry_date_field() throws Throwable {
		
		WebElement ccmonth = driver.findElement(By.xpath("//select[@id='cc_exp_month']"));
		Select cc = new Select(ccmonth);
		cc.selectByIndex(4);
		
		WebElement ccyear = driver.findElement(By.xpath("//select[@id='cc_exp_year']"));
		Select cc1 = new Select(ccyear);
		cc1.selectByValue("2030");

	}

	@When("^user has to enter cvv number on the cvv number field$")
	public void user_has_to_enter_cvv_number_on_the_cvv_number_field() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='cc_cvv']")).sendKeys("123");
		Thread.sleep(5000);

	}

	@Then("^user click on the book now and it navigate to booking confirmation$")
	public void user_click_on_the_book_now_and_it_navigate_to_booking_confirmation() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='book_now']")).click();
		Thread.sleep(5000);

	}
	
	@Then("^user click on my itenary and it navigate to booked itenary$")
	public void user_click_on_my_itenary_and_it_navigate_to_booked_itenary() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='my_itinerary']")).click();
		Thread.sleep(6000);

	}
	
	@Then("^user clicks on the logout button and you have successfully logout message appears$")
	public void user_clicks_on_the_logout_button_and_you_have_successfully_logout_message_appears() throws Throwable {
		
		driver.findElement(By.xpath("//input[@id='logout']")).click();

	}

}


	

	