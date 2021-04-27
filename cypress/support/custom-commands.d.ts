// keep file name different from any TS file within ~/cypress/support so they dont collide on compilation

// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /** Type signatures for methods you define in `~/cypress/support/commands.ts` go here */
  }
}
