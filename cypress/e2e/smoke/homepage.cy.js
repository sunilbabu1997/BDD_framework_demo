describe('OrangeHRM Homepage — Smoke', () => {
  it('should redirect to login page on root visit', () => {
    cy.visit('/');
    cy.url().should('include', '/auth/login');
  });

  it('should display OrangeHRM branding', () => {
    cy.visit('/');
    cy.get('.orangehrm-login-branding').should('be.visible');
  });
});
