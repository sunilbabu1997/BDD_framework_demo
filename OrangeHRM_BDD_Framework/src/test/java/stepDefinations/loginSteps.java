package stepDefinations;

import base.BaseClass;
import io.cucumber.java.en.*;
import pageObjects.LoginPage;

public class loginSteps extends BaseClass{
	
	LoginPage login;

    @Given("User launches Chrome browser")
    public void user_launches_chrome_browser() {
        setup();
    }

    @When("User opens OrangeHRM login page")
    public void user_opens_orange_hrm_login_page() {
        driver.get("https://opensource-demo.orangehrmlive.com/");
    }

    @When("User enters username and password")
    public void user_enters_username_and_password() {
        login = new LoginPage(driver);
        login.setUsername("Admin");
        login.setPassword("admin123");
    }

    @When("Clicks on login")
    public void clicks_on_login() {
        login.clickLogin();
    }

    @Then("User is navigated to the home page")
    public void user_is_navigated_to_the_home_page() {
        String expectedUrl = "dashboard";
        boolean status = driver.getCurrentUrl().contains(expectedUrl);
        assert status;
    }

    @Then("Close browser")
    public void close_browser() {
        tearDown();
    }
}
