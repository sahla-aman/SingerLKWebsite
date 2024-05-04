
describe('Navigation Test', {viewportWidth: 1366}, () => {
    it('Navigate to Products page', () => {
      

        cy.visit("https://www.singersl.com/");

        cy.get('a').contains(' Products ').click();

        cy.url().should('include', '/products'); 
    });
  });