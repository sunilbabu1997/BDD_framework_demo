Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]').type(email);
    cy.get('input[type="password"]').type(password, { log: false });
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});

Cypress.Commands.add('logout', () => {
  cy.get('.oxd-userdropdown-tab').click();
  cy.get('a[href="/web/index.php/auth/logout"]').click();
  cy.url().should('include', '/auth/login');
});
