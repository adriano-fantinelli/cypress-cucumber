/// <reference types="Cypress" />

const el = require('./elements').ELEMENTS

class BasePage {

    visit() {
        cy.visit("/", { failOnStatusCode: true, retryOnNetworkFailure: false })
    }

}
export default new BasePage();
