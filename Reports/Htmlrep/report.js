$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Book a hotel in adactin application",
  "description": "",
  "id": "book-a-hotel-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "user login adactin application",
  "description": "",
  "id": "book-a-hotel-in-adactin-application;user-login-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@first"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the username in username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter the password in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click the login button and it navigate to next page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 4014895300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_enter_the_username_in_username_field()"
});
formatter.result({
  "duration": 143015400,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_enter_the_password_in_the_password_field()"
});
formatter.result({
  "duration": 158487900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_click_the_login_button_and_it_navigate_to_next_page()"
});
formatter.result({
  "duration": 1608660600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "user search the hotel",
  "description": "",
  "id": "book-a-hotel-in-adactin-application;user-search-the-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user select the location from location dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user select the hotel from hotel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select the roomtype from roomtype dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user select the number of rooms from number of rooms dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user select the number of adults from adult per room dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select the number of childrens from children per room dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click on the search button and it navigate to select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_select_the_location_from_location_dropdown()"
});
formatter.result({
  "duration": 251369000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_select_the_hotel_from_hotel_dropdown()"
});
formatter.result({
  "duration": 111668700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_select_the_roomtype_from_roomtype_dropdown()"
});
formatter.result({
  "duration": 124428200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_select_the_number_of_rooms_from_number_of_rooms_dropdown()"
});
formatter.result({
  "duration": 137078500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_select_the_number_of_adults_from_adult_per_room_dropdown()"
});
formatter.result({
  "duration": 110406800,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_select_the_number_of_childrens_from_children_per_room_dropdown()"
});
formatter.result({
  "duration": 185969300,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_click_on_the_search_button_and_it_navigate_to_select_hotel_page()"
});
formatter.result({
  "duration": 1106161000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "user select the hotel",
  "description": "",
  "id": "book-a-hotel-in-adactin-application;user-select-the-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@select"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user select the radio button of the selected hotel",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user click on the continue button and it navigate to book a hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_select_the_radio_button_of_the_selected_hotel()"
});
formatter.result({
  "duration": 160755100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_click_on_the_continue_button_and_it_navigate_to_book_a_hotel_page()"
});
formatter.result({
  "duration": 1108789100,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "user book the hotel",
  "description": "",
  "id": "book-a-hotel-in-adactin-application;user-book-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user has to enter first name on the firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user has to enter last name on the lastname field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user has to enter address on the billing address field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user has to enter credit card no on the credit card no field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user has to select credit card type on the credit card type field dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user has to select month dropdown and select year dropdown on the expiry date field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user has to enter cvv number on the cvv number field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user click on the book now and it navigate to booking confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_has_to_enter_first_name_on_the_firstname_field()"
});
formatter.result({
  "duration": 200991600,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_has_to_enter_last_name_on_the_lastname_field()"
});
formatter.result({
  "duration": 146125100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_has_to_enter_address_on_the_billing_address_field()"
});
formatter.result({
  "duration": 205040200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_has_to_enter_credit_card_no_on_the_credit_card_no_field()"
});
formatter.result({
  "duration": 115588500,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_has_to_select_credit_card_type_on_the_credit_card_type_field_dropdown()"
});
formatter.result({
  "duration": 155246000,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_has_to_select_month_dropdown_and_select_year_dropdown_on_the_expiry_date_field()"
});
formatter.result({
  "duration": 344704100,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_has_to_enter_cvv_number_on_the_cvv_number_field()"
});
formatter.result({
  "duration": 5131004900,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_click_on_the_book_now_and_it_navigate_to_booking_confirmation()"
});
formatter.result({
  "duration": 5138100000,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "user confirms the booking",
  "description": "",
  "id": "book-a-hotel-in-adactin-application;user-confirms-the-booking",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "user click on my itenary and it navigate to booked itenary",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_click_on_my_itenary_and_it_navigate_to_booked_itenary()"
});
formatter.result({
  "duration": 15641475100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "user clicks on logout",
  "description": "",
  "id": "book-a-hotel-in-adactin-application;user-clicks-on-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "user clicks on the logout button and you have successfully logout message appears",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_logout_button_and_you_have_successfully_logout_message_appears()"
});
formatter.result({
  "duration": 2144363000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "user refresh the page",
  "description": "",
  "id": "book-a-hotel-in-adactin-application;user-refresh-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "Adactin page get refreshed",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});