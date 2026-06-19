class BasePage {
  visit(path = '') {
    cy.visit(path);
  }

  waitForElement(selector, timeout = 8000) {
    cy.get(selector, { timeout }).should('be.visible');
  }

  clickElement(selector) {
    cy.get(selector).should('be.visible').click();
  }

  typeText(selector, text) {
    cy.get(selector).should('be.visible').clear().type(text);
  }

  getElement(selector) {
    return cy.get(selector);
  }

  getByTestId(testId) {
    return cy.get(`[data-testid="${testId}"]`);
  }
}

export default BasePage;
