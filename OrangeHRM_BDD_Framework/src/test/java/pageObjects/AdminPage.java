package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class AdminPage {
	
	 WebDriver driver;

	    By usernameField = By.xpath("//label[text()='Username']/following::input[1]");
	    By searchButton = By.xpath("//button[@type='submit']");

	    public AdminPage(WebDriver driver) {
	        this.driver = driver;
	    }

	    public void enterUsername(String uname) {
	        driver.findElement(usernameField).sendKeys(uname);
	    }

	    public void clickSearch() {
	        driver.findElement(searchButton).click();
	    }

}
