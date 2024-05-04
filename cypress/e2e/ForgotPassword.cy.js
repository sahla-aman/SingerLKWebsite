describe('Password Reset Flow', () => {
    const testEmailAddress = `fakecat@${Cypress.env("MAILISK_NAMESPACE")}.mailisk.net`;
    it.only('should reset password via email link', {viewportWidth: 1366},() => {
      
      cy.visit('https://www.singersl.com/');
  
      cy.get('.login-link').click(); 

      cy.get('.forgot-password ').click();
  
      cy.get('.change-password-form').should('be.visible').within(() => {
        
            cy.get('input[name="email"]').type(testEmailAddress);
        
            cy.get('input[type="submit"]').click();
        });

        cy.mailiskSearchInbox(Cypress.env("MAILISK_NAMESPACE"), {   //Fetching the emails by namespace
            timeout:1000 * 15,   
          }).then((response) => {  
            cy.log(response)
            const emails = response.data;  //getting the latest emails  //3
            const email = emails[0];  //last email
            cy.log(email.text.match(/(https?:\/\/[^\s]+)/g)[1])  //Looking for text that starts with  Https in that specific content

        
            cy.visit(email.text.match(/(https?:\/\/[^\s]+)/g)[1]);
            cy.get('#close-reset-password-popup').click();

        
            cy.get('[placeholder="New Password"][id="edit-pass-pass1"]').type('R@dishahla69'); 
            cy.get('[placeholder="Confirm Password"][id="edit-pass-pass2"]').type('R@dishahla69'); 

            cy.get('#edit-submit').click();

            cy.get('div[role="alert"]').should('be.visible').and('contain.text', ' Your password has been changed! ');
          
          });
          
    
    });
});
  