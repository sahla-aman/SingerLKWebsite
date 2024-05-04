
describe('search input', () => {
    it('search input', () => {

      
      cy.visit('https://www.singersl.com/');
  
     
      cy.get('#edit-search').type('Test'); 
      cy.get('.search-icon').click();  
  
      cy.get('img[alt="Test Product - Do Not Order (TEST-002)"]').should('be.visible');  //expect product image
    });
  });
  