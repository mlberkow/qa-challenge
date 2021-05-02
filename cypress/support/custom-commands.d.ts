// keep file name different from any TS file within ~/cypress/support so they dont collide on compilation

// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Signs In with credentials
     * @example
     * cy.signInAs('email', 'password')
     */
    signInAs(email: string, password: string): Chainable<any>;
  }
}
