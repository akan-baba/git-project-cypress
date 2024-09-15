import { Environment } from "../../support/utils/environs";
import {LoginPage} from "../../support/pages/loginPage"
const baseUrl = Environment.getBaseUrl();
const loginPage = new LoginPage();


describe('User login page', () => {

    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it('User login with valid login details', () => {
        loginPage.pageAction.clickloginLink().click()
        loginPage.pageAction.enterUserName().type('Akan')
        loginPage.pageAction.enterPassword().type('red123')
        loginPage.pageAction.clickLoginButton().click()
        loginPage.pageAction.cliclLogOut().click()
    });
    
});