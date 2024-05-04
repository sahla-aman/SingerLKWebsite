describe('user logout', () => {
    it('User log out from the account', {viewportWidth: 1366},() => {

      
      cy.visit('https://www.singersl.com/');

      cy.get('.login-link').click();  
      cy.get('[placeholder="Email"][id="email"]').type('fakecat59@gmail.com');
      cy.get('[placeholder="Password"][id="password"]').type('Heyits66');
      cy.get('#login-submit').click()
      cy.get('a[href*="/customer"]').should('be.visible').and('contain.text', 'My Account')

      cy.xpath('//header/div[2]/div[1]/div[3]/nav[1]/ul[1]/li[3]/a[1]').click();

      cy.xpath('//header/div[2]/div[1]/div[3]/nav[1]/ul[1]/li[2]/a[1]').should('be.visible');
    });
}); 