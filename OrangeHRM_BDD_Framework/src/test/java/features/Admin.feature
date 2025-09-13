Feature: Verify Home Modules and Admin Module

  Scenario: Verify top-level modules on home page
    Given User is logged in
    Then User should see all top-level modules

  Scenario: Search for user in Admin module
    Given User is logged in
    When User navigates to Admin module
    And Enters username "Admin"
    And Clicks search
    Then Search results should be displayed