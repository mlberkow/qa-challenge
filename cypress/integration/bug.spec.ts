describe("View Image", () => {
  describe("validate smart tags", () => {
    it("has the correct tags", () => {
      cy.visit("/login");
      cy.signInAs("default", "default");
      cy.findAllByTestId("BOARD_CARD_THUMBNAIL-Demo").first().click();
      cy.findByText("_DSC2818-HDR").click();

      // TODO: Get API call for smart tags to validate expected tags are showing
      cy.findAllByTestId("link").should("not.contain.text", "building");
      cy.findAllByTestId("link").should("not.contain.text", "architecture");
    });
  });
});
