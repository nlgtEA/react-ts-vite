describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.contains('Home').should('exist');
  });
});
