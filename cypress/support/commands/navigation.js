Cypress.Commands.add('navigateTo', (route) => {
  cy.visit(route);
});

Cypress.Commands.add('goToDashboard', () => {
  cy.get('.oxd-sidepanel').contains('Dashboard').click();
  cy.url().should('include', '/dashboard');
});
