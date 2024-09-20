export class Computers {

    webSelectors = {
        addToCartButton: '.product-box-add-to-cart-button',
        shoppingCartlink: '.cart-label',
        termsOfService: '#termsofservice',
        checkOutBtn: '#checkout'
    }

    pageActions = {
        clickAddToCartBtn: () => cy.get(this.webSelectors.addToCartButton),
        clickShoppingCartLink: () => cy.get(this.webSelectors.shoppingCartlink),
        clickTermsOfService: () => cy.get(this.webSelectors.termsOfService),
        clickCheckOutBtn: () => cy.get(this.webSelectors.checkOutBtn)

    }
}