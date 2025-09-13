Feature: OrangeHRM Login Feature

  Scenario: Login with valid credentials
    Given User launches Chrome browser
    When User opens OrangeHRM login page
    And User enters username and password
    And Clicks on login
    Then User is navigated to the home page
    And Close browser