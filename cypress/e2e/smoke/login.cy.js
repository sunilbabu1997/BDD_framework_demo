import LoginPage from '../../pages/LoginPage';
import DashboardPage from '../../pages/DashboardPage';
import users from '../../fixtures/users.json';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('OrangeHRM Login — Smoke', () => {
  it('should load the login page with title', () => {
    loginPage.visit();
    loginPage.assertPageLoad();
    cy.title().should('eq', 'OrangeHRM');
  });

  it('should log in with valid Admin credentials', () => {
    loginPage.visit();
    loginPage.login(users.validUser.email, users.validUser.password);
    dashboardPage.assertPageLoad();
  });

  it('should display dashboard after successful login', () => {
    loginPage.visit();
    loginPage.login(users.validUser.email, users.validUser.password);
    dashboardPage.assertDashboardHeading();
  });
});
