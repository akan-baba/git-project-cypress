import { Environment } from "../../support/utils/environs";
import {Desktops} from "../../support/pages/desktops"
const baseUrl = Environment.getBaseUrl();
const desktopsPage = new Desktops();


describe('Desktop Baskets', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.linkText().contains('Computers').click({force: true})
        cy.linkText().contains('Desktops').click({force: true})
    });

    it('Acer Aspire TC-1780 Tower Desktop', () => {
        desktopsPage.pageActions.clickAddToCartBtn().eq(0).click();
        cy.selectDropDownByText(19, '8GB')
        cy.selectDropDownByText(20, '512GB SSD')
        cy.selectDropDownByText(21, 'Intel® Core™ i5')
        cy.selectDropDownByText(22, 'GeForce RTX 4000')
        cy.selectRadioButtonByText('Windows 11');
        cy.get('#add-to-cart-button-2').click()
        desktopsPage.pageActions.clickShoppingCartLink().click();
        desktopsPage.pageActions.clickTermsOfService().click();
        desktopsPage.pageActions.clickCheckOutBtn().click();
        cy.checkAsGuest()
    });

    it('HP Slim S01-aF2006na Desktop PC', () => {
        desktopsPage.pageActions.clickAddToCartBtn().eq(1).click();
        cy.selectDropDownByText(14, '16GB')
        cy.selectDropDownByText(15, '256GB SSD')
        cy.selectDropDownByText(16, 'Intel® Core™ i3')
        cy.selectDropDownByText(17, 'GeForce RTX 4050')
        cy.selectRadioButtonByText('Windows 10');
        cy.get('#add-to-cart-button-1').click()
        desktopsPage.pageActions.clickShoppingCartLink().click();
        desktopsPage.pageActions.clickTermsOfService().click();
        desktopsPage.pageActions.clickCheckOutBtn().click();
        cy.checkAsGuest()
    });

  it('Lenovo Legion Tower 5 Gen 8 (AMD)', () => {
    desktopsPage.pageActions.clickAddToCartBtn().eq(2).click();
    cy.selectDropDownByText(24, '32GB')
    cy.selectDropDownByText(25, '768GB SSD')
    cy.selectDropDownByText(26, 'Intel® Core™ i7')
    cy.selectDropDownByText(28, 'GeForce RTX 4050')
    cy.selectRadioButtonByText('Windows Server 2022');
    cy.get('#add-to-cart-button-3').click()
    desktopsPage.pageActions.clickShoppingCartLink().click();
    desktopsPage.pageActions.clickTermsOfService().click();
    desktopsPage.pageActions.clickCheckOutBtn().click();
    cy.checkAsGuest()
  });
    
});