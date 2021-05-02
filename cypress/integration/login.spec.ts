describe("Visiting login page", () => {
  describe("as an unauthenticated user", () => {
    it("signs in", () => {
      cy.visit("/login");
      cy.signInAs("default", "default");
      cy.findByTestId("ACCOUNT_POPOVER_BUTTON").should("have.text", "MB");
      cy.findByTestId("CURRENT_WORKSPACE_BUTTON").should("have.text", "Test");
    });
  });
});
