describe('Products Page Sorting', () => {
  
  it('sorts products from low to high price', () => {
    
    cy.visit('https://www.singersl.com/products');
    cy.get('a').contains('Price - Low to High').click();
    
    cy.get('.selling-price').then(($prices) => { 
    const prices = $prices.map((i, el) => parseFloat(el.textContent.trim())).toArray();   // list of prices
     
    expect(prices).to.be.equal(prices.sort((a, b) => a - b));  //ensure that prices are in ascending order
    });
  });

  it('sorts products from high to low price', () => {
    
    cy.visit('https://www.singersl.com/products');
    cy.get('a').contains('Price - High to Low').click();
   
    cy.get('.selling-price').then(($prices) => {
    const prices = $prices.map((i, el) => parseFloat(el.textContent.trim())).toArray();

    expect(prices).to.be.equal(prices.sort((a, b) => b - a));
    });
  });
}); 