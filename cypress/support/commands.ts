import "@testing-library/cypress/add-commands";

const DEFAULT_EMAIL = "mlberkow@gmail.com";
const DEFAULT_PASSWORD = "I'mAL11tleTeapot";

/* Sign In creds are variables to allow for testing a variety of scenarios including
  Invalid credentials (both invalid user name and invalid password)
  Signing in with other credentials that have other permissions
  Signing out and back in with different credentials (to make sure that you end up in the correct account)
*/

Cypress.Commands.add("signInAs", (email, password) => {
  email = email === "default" ? DEFAULT_EMAIL : email;
  password = password === "default" ? DEFAULT_PASSWORD : password;

  cy.findByTestId("AUTH_LAYOUT_HEADER").should("be.visible");
  cy.findByTestId("input_email_untouched").type(email);
  cy.findByTestId("input_password_untouched").type(password);
  cy.findByTestId("LOGIN_SUBMIT_BUTTON").click();
});

// Define the type signature for any method you define here in `./custom-commands.d.ts`
