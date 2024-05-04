describe('Navigation Test', {viewportWidth: 1366}, () => {
    it('Navigate to About Page', () => {
       
 
      cy.visit("https://xitebacademy.com/");

      cy.wait(5000);
 
      //cy.xpath('//body/div[2]/div[1]/ul[1]/li[1]/a[1]/i[1]').click();

      cy.xpath('//body/nav[1]/div[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[2]/a[1]').click();
 
      cy.wait(2000);

      cy.url().should('include', 'https://xitebacademy.com/about');
     });

       it('Navigate to Courses page', () => {
       
 
        cy.visit("https://xitebacademy.com/");
  
        cy.wait(5000);

  
        cy.xpath('//body/nav[1]/div[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[3]/a[1]').click();
   
        cy.wait(2000);
  
        cy.url().should('include', 'https://xitebacademy.com/courses');
       });


       it.only('Navigate to Content page', () => {
       
 
        cy.visit("https://xitebacademy.com/");
  
        cy.wait(5000);
  
        cy.xpath('//body/nav[1]/div[1]/div[1]/div[1]/nav[1]/div[3]/ul[1]/li[3]/a[1]').click();
   
        cy.wait(2000);
  
        cy.url().should('include', 'https://xitebacademy.com/courses');
       });
   });