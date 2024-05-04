describe('user login', () => {
    it('User login with Correct Username and Password', () => {

      
      cy.visit('https://www.singersl.com/');

      cy.get('.login-link').click();  
      cy.get('[placeholder="Email"][id="email"]').type('****cat59@gmail.com');
      cy.get('[placeholder="Password"][id="password"]').type('**');
      cy.get('#login-submit').click()
      cy.get('a[href*="/customer"]').should('be.visible').and('contain.text', 'My Account')
    });

    it('User login with incorrect password', () => {
        cy.visit('https://www.singersl.com/');
    
        cy.get('.login-link').click(); 
        cy.get('[placeholder="Email"][id="email"]').type('fakecat59@gmail.com'); 
        cy.get('[placeholder="Password"][id="password"]').type('Haha23'); 
    
        cy.get('#login-submit').click(); 
        
        cy.get('.messages-content').should('be.visible').and('contain.text', 'Invalid email or password'); 
      });
    
      it('User login with incorrect email', () => {
        cy.visit('https://www.singersl.com/');
    
        cy.get('.login-link').click(); 
        cy.get('[placeholder="Email"][id="email"]').type('nonvalid@gmail.com'); 
        cy.get('[placeholder="Password"][id="password"]').type('**'); 
    
        cy.get('#login-submit').click(); 
        
        cy.get('div[role="alert"]').should('be.visible').and('contain.text', 'Please register before login');
      });
    
      it('User login with both incorrect email and password', () => {
        cy.visit('https://www.singersl.com/');
    
        cy.get('.login-link').click(); 
        cy.get('[placeholder="Email"][id="email"]').type('nonvalid@gmail.com'); 
        cy.get('[placeholder="Password"][id="password"]').type('HaHa23'); 
    
        cy.get('#login-submit').click(); 
        
        cy.get('div[role="alert"]').should('be.visible').and('contain.text', 'Please register before login');
      });
  });
  