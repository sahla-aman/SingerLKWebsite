describe('Adding product to cart', () => {
  it('adds product to cart and removes the product from the cart', () => {
   
    const product_name = "Test Product - Do Not Order (TEST-002)";

    cy.visit("https://www.singersl.com/filter?search=test");

    cy.get('img[alt="Test Product - Do Not Order (TEST-002)"]').should('be.visible');

    cy.get('.add-to-cart-link').click();

    cy.get('div[data-singer-messages]').should('be.visible');

    cy.get('a').contains("your cart").click();

    cy.get('h3').then(($itemName) => {
      const items = $itemName.map((i, el) => el.textContent);   
      expect(product_name).to.be.equal(items[0]);
    }); 
//./../
   ////////////////////////////////////////////////////////////////

    cy.get('.product-info-cart').should('be.visible');
  
    var itemsBeforeRem = [];
    cy.get('h3').then(($itemName) => {                              //record the cart items before removal as a list
      itemsBeforeRem = $itemName.map((i, el) => el.textContent);
    });

    cy.get('.delete-order-item').click();
    cy.xpath('//body/div[3]/div[4]/div[1]/div[2]').should('be.visible');
    cy.xpath('//body/div[3]/div[4]/div[1]/div[3]/a[1]').click(); //ok

    var itemsAfterRem = [];
    if(itemsBeforeRem.length > 1){ 
      cy.get('h3').then(($itemName) => {
        itemsAfterRem = $itemName.map((i, el) => el.textContent);   //record the cart items after removal
      });
    }
    
    
    if(itemsBeforeRem.length == 0){
      expect(itemsBeforeRem.length).to.be.equal(itemsAfterRem.length);
    }else{
      expect(itemsBeforeRem.length).to.be.equal(itemsAfterRem.length + 1);
    }
  
  });
    
});


