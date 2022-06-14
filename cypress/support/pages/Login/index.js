/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS

class LoginPage {
    fillInputEmail(emailValue) {
        cy.get(el.emailInput).type(emailValue)
    }

    fillInputPassword(passwordValue) {
        cy.get(el.passwordInput).type(passwordValue)
    }

    clickSubmitLoginButton() {
        cy.get(el.submitLoginButton).click()
    }

    validateErrorMessageText(errorMessageText) {
        cy.get(el.erroMessage).should('have.text', errorMessageText)
    }
}
export default new LoginPage();
