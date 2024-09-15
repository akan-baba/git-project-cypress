
  Cypress.Commands.add('linkText', () => {
    cy.get("a[href*='/']");
  });

  Cypress.Commands.add('selectDropDownByText', (id, optionText) => {
    cy.get(`#product_attribute_${id}`).select(optionText);
});

Cypress.Commands.add('selectRadioButtonByText', (labelText) => {
  cy.contains('label', labelText).click(); // Finds the label and clicks on it
});

  const { faker } = require('@faker-js/faker');

  // Generate random user data using Faker
  const email = faker.internet.email();
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  
Cypress.Commands.add('checkAsGuest', () => {
    cy.get('.button-1.checkout-as-guest-button').click()
    cy.get('#BillingNewAddress_FirstName').type(firstname)
    cy.get('#BillingNewAddress_LastName').type(lastname)
    cy.get('#BillingNewAddress_Email').type(email)
    cy.get('#BillingNewAddress_CountryId').select('235')
    cy.get('#BillingNewAddress_StateProvinceId').select('628')
    cy.get('#BillingNewAddress_County').type('Manchester')
    cy.get('#BillingNewAddress_City').type('Manchester')
    cy.get('#BillingNewAddress_Address1').type('123 Main St')
    cy.get('#BillingNewAddress_ZipPostalCode').type('M1 1AA')
    cy.get('#BillingNewAddress_PhoneNumber').type('1234567890')
    cy.get("button[onclick='Billing.save()']").click()
    cy.get('.button-1.shipping-method-next-step-button').click()
    cy.get("button[class='button-1 payment-method-next-step-button']").click()
    cy.get('.button-1.payment-info-next-step-button').click()
    cy.get('.button-1.confirm-order-next-step-button').click()
    cy.get("div[class='section order-completed'] div[class='title'] strong").should('be.visible', 'Your order has been successfully processed!')
    cy.get('.button-1.order-completed-continue-button').click()
    cy.get("div[class='topic-block-title'] h2").should('be.visible', 'Welcome to our store')
    
})