describe('Social Login', () => {
  it('should redirect to Facebook authentication page', {viewportWidth: 1366}, () => {
      cy.visit('https://www.singersl.com/');

      cy.get('.login-link').click(); 


      cy.get('.social-auth.auth-link.login-facebook').click();

     
      cy.url().should('include', 'facebook.com');
  });

  it('should redirect to Google authentication page', () => {
      cy.visit('https://www.singersl.com/');

      cy.get('.login-link').click(); 

      cy.get('.social-auth.auth-link.login-google').click();
      
      cy.url().should('include', '');
      
  });

  it('should redirect to Apple authentication page', {viewportWidth: 1366}, () => {
      cy.visit('https://www.singersl.com/');

      cy.get('.login-link').click(); 

  
      cy.get('.social-auth.auth-link.login-apple').click();
       

      
      cy.url().should('include', '');
  });
});
