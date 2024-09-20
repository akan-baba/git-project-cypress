import { Environment } from "../../support/utils/environs";
import { Computers } from "../../support/pages/computers"
const baseUrl = Environment.getBaseUrl();
const computerPage = new Computers();


describe('Laptop Baskets', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.linkText().contains('Computers').click({ force: true })
        cy.linkText().contains('Laptops').click({ force: true })
    });

    it('Apple 2022 MacBook Air laptop with M2 chip', () => {
        computerPage.pageActions.clickAddToCartBtn().eq(0).click();
        cy.selectDropDownByText(29, '8GB')
        cy.selectDropDownByText(30, '512GB SSD')
        cy.selectDropDownByText(31, 'Intel® Core™ i5')
        cy.selectDropDownByText(33, 'GeForce RTX 4000')
        cy.selectRadioButtonByText('Windows 11');
        cy.selectRadioButtonByText('14 Inch 1366 x 768');
        cy.get('#add-to-cart-button-4').click()
        computerPage.pageActions.clickShoppingCartLink().click();
        computerPage.pageActions.clickTermsOfService().click();
        computerPage.pageActions.clickCheckOutBtn().click();
        cy.checkAsGuest()
    });

    it('ASUS Zenbook Laptop – Intel® Core', () => {
        computerPage.pageActions.clickAddToCartBtn().eq(1).click();
        cy.selectDropDownByText(35, '16GB')
        cy.selectDropDownByText(36, '256GB SSD')
        cy.selectDropDownByText(37, 'Intel® Core™ i7')
        cy.selectDropDownByText(38, 'GeForce RTX 4000')
        cy.selectRadioButtonByText('Windows 10');
        cy.selectRadioButtonByText('15.6 Inch Full HD 144Hz');
        cy.get('#add-to-cart-button-5').click()
        computerPage.pageActions.clickShoppingCartLink().click();
        computerPage.pageActions.clickTermsOfService().click();
        computerPage.pageActions.clickCheckOutBtn().click();
        cy.checkAsGuest()
    });

    it('HP ENVY x360 Laptop - AMD Ryzen , SSD, Silver', () => {
        computerPage.pageActions.clickAddToCartBtn().eq(2).click();
        cy.selectDropDownByText(41, '16GB')
        cy.selectDropDownByText(42, '256GB SSD')
        cy.selectDropDownByText(43, 'Intel® Core™ i7')
        cy.selectDropDownByText(44, 'GeForce RTX 4000')
        cy.selectRadioButtonByText('Windows Server 2022');
        cy.selectRadioButtonByText('16.3 Inch Full HD 144Hz');
        cy.get('#add-to-cart-button-6').click()
        computerPage.pageActions.clickShoppingCartLink().click();
        computerPage.pageActions.clickTermsOfService().click();
        computerPage.pageActions.clickCheckOutBtn().click();
        cy.checkAsGuest()
    });

    it('HP ENVY x360 14 - Intel® Core™ Ultra 7, SSD', () => {
        computerPage.pageActions.clickAddToCartBtn().eq(3).click();
        cy.selectDropDownByText(47, '32GB')
        cy.selectDropDownByText(48, '256GB SSD')
        cy.selectDropDownByText(49, 'Intel® Core™ i9')
        cy.selectDropDownByText(50, 'GeForce RTX 4000')
        cy.selectRadioButtonByText('Windows Server 2022');
        cy.selectRadioButtonByText('16.3 Inch Full HD 144Hz');
        cy.get('#add-to-cart-button-7').click()
        computerPage.pageActions.clickShoppingCartLink().click();
        computerPage.pageActions.clickTermsOfService().click();
        computerPage.pageActions.clickCheckOutBtn().click();
        cy.checkAsGuest()
    });

    it('LENOVO Yoga Slim 7 Aura Edition Laptop - Intel®', () => {
        computerPage.pageActions.clickAddToCartBtn().eq(4).click();
        cy.selectDropDownByText(53, '32GB')
        cy.selectDropDownByText(54, '256GB SSD')
        cy.selectDropDownByText(55, 'Intel® Core™ i9')
        cy.selectDropDownByText(56, 'GeForce RTX 4000')
        cy.selectRadioButtonByText('Windows Server 2022');
        cy.selectRadioButtonByText('17.3 Inch Full HD 144Hz');
        cy.get('#add-to-cart-button-8').click()
        computerPage.pageActions.clickShoppingCartLink().click();
        computerPage.pageActions.clickTermsOfService().click();
        computerPage.pageActions.clickCheckOutBtn().click();
        cy.checkAsGuest()
    });

      it('LG gram SuperSlim OLED 15Z90ST Laptop - Intel® Core', () => {
        computerPage.pageActions.clickAddToCartBtn().eq(5).click();
        cy.selectDropDownByText(59, '32GB')
        cy.selectDropDownByText(60, '256GB SSD')
        cy.selectDropDownByText(61, 'Intel® Core™ i9')
        cy.selectDropDownByText(62, 'GeForce RTX 4000')
        cy.selectRadioButtonByText('Windows Server 2022');
        cy.selectRadioButtonByText('17.3 Inch Full HD 144Hz');
        cy.get('#add-to-cart-button-9').click()
        computerPage.pageActions.clickShoppingCartLink().click();
        computerPage.pageActions.clickTermsOfService().click();
        computerPage.pageActions.clickCheckOutBtn().click();
        cy.checkAsGuest()
      });

});