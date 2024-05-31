Feature: Book a hotel in adactin application

Scenario: user login adactin application
Given user launch the adactin application
When user enter the username in username field
And user enter the password in the password field
Then user click the login button and it navigate to next page


Scenario: user search the hotel
When user select the location from location dropdown
And user select the hotel from hotel dropdown
And user select the roomtype from roomtype dropdown
And user select the number of rooms from number of rooms dropdown
And user select the number of adults from adult per room dropdown
And user select the number of childrens from children per room dropdown
Then user click on the search button and it navigate to select hotel page


Scenario: user select the hotel
When user select the radio button of the selected hotel
Then user click on the continue button and it navigate to book a hotel page

Scenario: user book the hotel
When user has to enter first name on the firstname field
And user has to enter last name on the lastname field
And user has to enter address on the billing address field
And user has to enter credit card no on the credit card no field
And user has to select credit card type on the credit card type field dropdown
And user has to select month dropdown and select year dropdown on the expiry date field
And user has to enter cvv number on the cvv number field
Then user click on the book now and it navigate to booking confirmation


Scenario: user confirms the booking
Then user click on my itenary and it navigate to booked itenary

Scenario: user clicks on logout
Then user clicks on the logout button and you have successfully logout message appears


