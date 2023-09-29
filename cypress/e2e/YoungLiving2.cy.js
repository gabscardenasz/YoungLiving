

describe('template spec', () => {
  // Test data (credentials and shipping address)
  const shippingAddress = {
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    city: 'Santa Barbara',
    state: 'CA',
    zipCode: '93105',
    phoneNumber: '123-456-7890',
  };



  it('passes', () => {
    cy.viewport(1680, 1050)
    cy.visit("https://www.youngliving.com/us/en");
    cy.get('.menu-title').click();
    cy.get("#onetrust-accept-btn-handler").click();
    cy.wait(2000)
    cy.get("#loginUsername").type('gabs.cardenasz@gmail.com');
    cy.get("#continue-btn").click();
    cy.get("#loginPassword").type('Test$123').wait(500);
    cy.get("#login-btn").click();
    cy.get('#failure-link-button').click()
    cy.wait(60000)
    cy.get('#btn-go-back > span').click()
    cy.get("#loginUsername").type('gabs.cardenasz@gmail.com');
    cy.get("#continue-btn").click();
    cy.get("#loginPassword").type('Test$123');
    cy.get("#login-btn").click();
    cy.get("#main > div > div.categorycarousel.p-0.col-12 > section > div > ul > li:nth-child(1) > a > div.card-hover-on-container > img").click();
    cy.get("#main > section > div.catalog-container > div.catalog-page-wrap.mx-auto.my-0.flex-column.row.no-gutters > div.product-list-wrapper.col-lg-12.col-md-12 > div.card-group.catalog-page > div:nth-child(1) > div > div.custom-button-class.w-100 > button.add-to-bag-button.mr-1.mb-1.rounded-0.w-100.btn.btn-primary").click();
    //verify that your item to the cart was successful
    cy.get("#app-root > div:nth-child(2) > div > div.toast-content.m-0.text-black.pr-2.py-2.col-lg-10");
    cy.contains(/Added to Cart Successfully/i).should('exist');
    cy.get("#toastButton").click();

    //Compare  item price matches the price showed under Order Summary 
    cy.get('span.value-wrapper')
      .invoke('text')
      .then((text1) => {
        cy.get('#miniCartContainer > aside > div > div.minicart-button-wrapper > div:nth-child(1) > div.cart-pv-count.pr-4.justify-content-between > div > span.pl-1')
          .invoke('text')
          .then((text2) => {
            expect(text1).equal(text2);
          });
      });

    // Go to Viewcart page
    cy.get("#miniCartContainer > aside > div > div.minicart-button-wrapper > a > button").click();
    //cy.get("#gtm__modal-btn-close").click({ force: true });

    //Compare in the viewcart page and item price matches the price showed under Order Summary 
    cy.get('span.value-wrapper')
      .invoke('text')
      .then((text1) => {
        cy.get('#main > div > div > div.cart-summary-wrapper.pl-lg-2.col-lg-4.col-md-4.col-sm-12.col-12 > div > div.cart-summary-with-promo.px-lg-3.d-flex.flex-wrap.flex-lg-row.align-items-lg-start.align-items-end.container > div.col-lg-12.p-0 > div.row.no-gutters > div.cart-right-total-wrapper.col > div > span.right-span.justify-content-end.font-weight-three-hundred')
          .invoke('text')
          .then((text2) => {
            expect(text1).equal(text2);
          });
      });


    //go to Checkout View
    cy.get("#main > div > div > div.cart-summary-wrapper.pl-lg-2.col-lg-4.col-md-4.col-sm-12.col-12 > div > div.d-flex.justify-content-between.flex-wrap.flex-lg-row.px-lg-3.cart-view-wrapper > div.cart-view-button-wrapper.row.no-gutters > button").click({ force: true });

    //Compare in the Checkout View that item price matches the price showed under Order Summary
    cy.get('span.value-wrapper')
      .invoke('text')
      .then((text1) => {
        cy.get('span.right-span.justify-content-end.font-weight-three-hundred')
          .invoke('text')
          .then((text2) => {
            expect(text1).equal(text2);
          });
      });

      cy.waitForStableDOM ////this is a plug-in that helps to be sure your DOM is stable
      //cy.contains(/SHIPPING ADDRESS/i).should('be.visible')
      cy.wait(15000)
      cy.get('.align-items-center > .d-flex > .prefill-data').should('have.text', "Card ending with 9470")
    /*
    cy.wait(1000)
    cy.get('div#3.accordion-block-wrapper.border-bottom.accordion-border.referralIdDomAccordion-checkout.px-2.px-md-0.row.no-gutters').should('exist');
    cy.get('div#3.accordion-block-wrapper.border-bottom.accordion-border.referralIdDomAccordion-checkout.px-2.px-md-0.row.no-gutters').should('be.visible');
    cy.get('button.px-5.py-2.mt-1.referral-code-continue.semi-solid-button.text-uppercase.btn.btn-primary').should('be.visible');
    cy.get('button.px-5.py-2.mt-1.referral-code-continue.semi-solid-button.text-uppercase.btn.btn-primary').click({ force: true });
    cy.get('[data-testid="qa-confirm-yes"]').click().wait(3000)
    */
    cy.get('[data-testid="qa-ship-title"] > .px-0 > .checkout-change-button').click()
    cy.get('.new-address-tab').click()
    cy.get('[data-testid="qa-first-name"]').type('John')
    cy.get('[data-testid="qa-last-name"]').type('Doe')
    cy.get('[data-testid="qa-address1"]').type('564 Main Rd')
    cy.get('[data-testid="qa-city"]').type('Santa Barbara')
    cy.get('[data-testid="qa-state"]').select('California')
    cy.get('[data-testid="qa-code"]').type('93105')
    cy.get('.col-lg-12 > .no-gutters > [data-testid="qa-ship-continue"]').click().wait(1500)

    // Verify address
    cy.get('#suggestion-modal-header').should('have.text', 'Verify Address')

    cy.get(':nth-child(1) > .pr-3 > .my-2').click()
    cy.get('[data-testid="qa-suggestion-save"]').click()
    cy.get('[data-testid="qa-code"]').click()
    cy.get('body').click(1,1)
    cy.get('.col-lg-12 > .no-gutters > [data-testid="qa-ship-continue"]').click()
    cy.get(':nth-child(3) > .custom-control > .custom-control-label').click()
    cy.get('[data-testid="qa-ship-methods-continue"]').click().wait(2000)

    cy.get('#uncontrolled-tab-example-tab-newCard').click().wait(1500)
    cy.get('[data-testid="qa-card-first-name"]').type('Daniel')
    cy.get('[data-testid="qa-card-last-name"]').type('Chinchay')
    cy.get('[data-testid="qa-pay-card"]').type('4557880551669470')
    cy.get('[data-testid="qa-pay-month"]').type('02')
    cy.get('[data-testid="qa-pay-year"]').type('2024')
    cy.get(':nth-child(3) > [aria-label="CVV"] > .input-group > [data-testid="qa-pay-code"]').type('532')
    cy.get('[data-testid="qa-pay-continue"]').click().wait(30000)

    // Verify payment card
    //cy.get('.custom-control-label > span').click()
    cy.get('.align-items-center > .d-flex > .prefill-data').should('have.text', "Card ending with 9470")
  });

});
