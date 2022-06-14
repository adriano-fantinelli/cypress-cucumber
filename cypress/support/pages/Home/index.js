/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS

class HomePage {

    validateUrlHome() {
        cy.url().should('include', 'my-account')
    }

    validateUserName(userName) {
        cy.get(el.userName).should('have.text', userName)
    }

    validateMyAccountTextExists() {
        cy.get(el.myAccountText).should('exist')
    }

}
export default new HomePage();
