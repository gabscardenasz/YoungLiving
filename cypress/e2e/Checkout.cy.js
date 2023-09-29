describe('checkout spec', () => {
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
    cy.visit("https://www.youngliving.com/us/en/checkout");
cy.get('div#3.accordion-block-wrapper.border-bottom.accordion-border.referralIdDomAccordion-checkout.px-2.px-md-0.row.no-gutters').should('exist');
cy.get('button.px-5.py-2.mt-1.referral-code-continue.semi-solid-button.text-uppercase.btn.btn-primary').should('exist').wait(26000).click();
  });
});

//cy.get("body > div.fade.confirm-remove-model.p-0.modal.show > div > div > div.p-0.model-card-body.modal-body > div > button.referal-button.confirm-delete.text-uppercase.rounded-0.justify-content-center.p-0.px-3.shadow-none.mx-2.btn.btn-primary.btn-lg").click();
//cy.get("#\34  > div.accordion-block-title-button.align-items-center.d-flex.bg-transparent.shadow-none.p-0.border-0.btn.btn-light.btn-block.btn-lg.checkout-accordion.btn.btn-light.btn-block.btn-lg > div.px-0.ml-2.d-flex.justify-content-end.align-items-center.flex-shrink-1.flex-grow-0.col > button").click();

