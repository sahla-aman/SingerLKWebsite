// describe('Adding products to cart and checking total price', { viewportWidth: 1366 }, () => {
//   it('adds products to cart and checks total price', () => {
//       const product_name_1 = "Test Product - Do Not Order (TEST-002)";
//       const product_name_2 = "Plastic Bobbin (Model 974) (172336-BP-N)";

//       cy.visit("https://www.singersl.com/filter?search=test");
//       cy.get('img[alt="Test Product - Do Not Order (TEST-002)"]').should('be.visible');
//       cy.get('.add-to-cart-link').click();
//       cy.get('div[data-singer-messages]').should('be.visible');

//       cy.visit("https://www.singersl.com/filter?search=Plastic%20Bobbin%20(Model%20974)%20(172336-BP-N)");
//       cy.get('img[alt="Plastic Bobbin (Model 974) (172336-BP-N)"]').should('be.visible');
//       cy.get('.add-to-cart-link').click();
//       cy.get('div[data-singer-messages]').should('be.visible');

//       cy.get('a').contains("your cart").click();

//       // Calculate total price
//       let totalPrice = 500;
//       cy.get('.price-selling').then(($prices) => {
//           const prices = $prices.map((i, el) => parseFloat(el.textContent.trim())).toArray();
//           console.log("Prices:", prices); // Log prices for debugging
//           prices.forEach(element => {
//               totalPrice += element;
//           });

//           // Verify if totalPrice is calculated correctly
//           console.log("Total Price:", totalPrice);

//           // Get calculated total price
//           cy.xpath('//span[contains(@class, "regular-total-final-price")]')
//             .should('be.visible')
//             .then(($price) => {
//               const priceText = $price.text().trim();
//               console.log("Price Text:", priceText); // Log the text content for debugging
//               const priceCalculated = parseFloat(priceText);
//               console.log("Calculated Price:", priceCalculated); // Log calculated price for debugging

//               // Assert total price
//               expect(priceCalculated).to.be.equal(totalPrice);
//           });
//       });
//   });
// });
