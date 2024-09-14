
export class LoginPage {

    webSelectors ={
        loginLink: '.ico-login',
        userName: '#Username',
        password:'#Password',
        loginButton: "button[class='button-1 login-button']",
        logOut: '.ico-logout',
        forgotPwd: "a[href='/passwordrecovery']",
        email:'#Email',
        recoverBtn: "button[name='send-email']"
    }

    pageAction ={
      clickloginLink: () => cy.get(this.webSelectors.loginLink),
      enterUserName: () => cy.get(this.webSelectors.userName),
      enterPassword: () => cy.get(this.webSelectors.password),
      clickLoginButton: () => cy.get(this.webSelectors.loginButton),
      cliclLogOut: () => cy.get(this.webSelectors.logOut),
      clickForgotPwd: () => cy.get(this.webSelectors.forgotPwd),
      enterEmail: () => cy.get(this.webSelectors.email),
      clickRecoverBtn: () => cy.get(this.webSelectors.recoverBtn)
    }
}