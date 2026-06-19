import LoginPage from '../../../pages/LoginPage';
import DashboardPage from '../../../pages/DashboardPage';
import users from '../../../fixtures/users.json';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('OrangeHRM Login — Success Scenarios', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with valid Admin credentials and redirect to dashboard', () => {
    loginPage.login(users.validUser.email, users.validUser.password);
    loginPage.assertUrlContains('/dashboard/index');
    dashboardPage.assertDashboardHeading();
  });

  it('should display the dashboard heading after login', () => {
    loginPage.login(users.validUser.email, users.validUser.password);
    dashboardPage.assertDashboardHeading();
  });

  it('should show the side panel navigation after login', () => {
    loginPage.login(users.validUser.email, users.validUser.password);
    cy.get('.oxd-sidepanel').should('be.visible');
  });
});
