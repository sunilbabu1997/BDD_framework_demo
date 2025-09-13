package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage {
	
	 WebDriver driver;

	    // Locators for top menu modules
	    By adminModule = By.xpath("//span[text()='Admin']");
	    By pimModule = By.xpath("//span[text()='PIM']");
	    By leaveModule = By.xpath("//span[text()='Leave']");
	    By dashboardModule = By.xpath("//span[text()='Dashboard']");

	    public HomePage(WebDriver driver) {
	        this.driver = driver;
	    }

	    public boolean isAdminVisible() {
	        return driver.findElement(adminModule).isDisplayed();
	    }

	    public boolean isPIMVisible() {
	        return driver.findElement(pimModule).isDisplayed();
	    }

	    public boolean isLeaveVisible() {
	        return driver.findElement(leaveModule).isDisplayed();
	    }

	    public boolean isDashboardVisible() {
	        return driver.findElement(dashboardModule).isDisplayed();
	    }

	    public void clickAdmin() {
	        driver.findElement(adminModule).click();
	    }

}
