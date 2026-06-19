import BasePage from './BasePage';

class DashboardPage extends BasePage {
  get heading() { return 'h6'; }
  get profileDropdown() { return '.oxd-userdropdown-tab'; }
  get logoutMenuItem() { return 'a[href="/web/index.php/auth/logout"]'; }
  get sidePanel() { return '.oxd-sidepanel'; }

  visit() {
    super.visit('/web/index.php/dashboard/index');
  }

  assertDashboardHeading() {
    cy.get(this.heading).should('contain.text', 'Dashboard');
  }

  assertPageLoad() {
    cy.get(this.heading).should('be.visible');
    cy.url().should('include', '/dashboard/index');
  }

  logout() {
    this.clickElement(this.profileDropdown);
    this.clickElement(this.logoutMenuItem);
  }
}

export default DashboardPage;
