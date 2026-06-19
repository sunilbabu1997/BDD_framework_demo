import BasePage from './BasePage';

class LoginPage extends BasePage {
  // Selectors — extracted via Playwright accessibility mapping from OrangeHRM
  get emailInput() { return 'input[name="username"]'; }
  get passwordInput() { return 'input[type="password"]'; }
  get loginButton() { return 'button[type="submit"]'; }
  get errorMessage() { return '.oxd-alert-content-text'; }
  get forgotPasswordLink() { return '.orangehrm-login-forgot'; }
  get loginPanelTitle() { return '.orangehrm-login-title'; }

  visit() {
    super.visit('/web/index.php/auth/login');
  }

  login(email, password) {
    this.typeText(this.emailInput, email);
    this.typeText(this.passwordInput, password);
    this.clickElement(this.loginButton);
  }

  assertErrorMessage(expectedText) {
    cy.get(this.errorMessage).should('contain.text', expectedText);
  }

  assertPageLoad() {
    cy.get(this.loginPanelTitle).should('be.visible');
    cy.get(this.loginButton).should('be.visible');
  }

  assertUrlContains(path) {
    cy.url().should('include', path);
  }
}

export default LoginPage;
