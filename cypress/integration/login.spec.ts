describe("Visiting login page", () => {
  describe("as an unauthenticated user", () => {
    it("works", () => {
      cy.visit("/login");
      cy.findByTestId("AUTH_LAYOUT_HEADER").should("be.visible");
      cy.findByLabelText("Email *").type("not-a-real-user@gmail.com");
    });
  });
});
