Cypress.Commands.add('getByTestId', (testId) => {
  cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add('assertVisible', (selector) => {
  cy.get(selector).should('be.visible');
});

Cypress.Commands.add('assertContainsText', (selector, text) => {
  cy.get(selector).should('contain.text', text);
});
