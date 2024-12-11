import Dashboard from "../../src/components/authentication-01";

describe("Two-Factor Authentication Dashboard", () => {
  beforeEach(() => {
    // Mount the Dashboard component in the test environment
    cy.mount(<Dashboard />);
  });

  it("renders the dashboard with correct elements", () => {
    // Check that the title is correct
    cy.contains("Two-Factor Authentication").should("exist");

    // Check for the description
    cy.contains(
      "Enter the 6-digit code sent to your email or phone to proceed."
    ).should("exist");

    // Check for the Authentication Code label
    cy.get("label").contains("Authentication Code").should("exist");

    // Verify that all input slots for the OTP are rendered
    cy.get("[data-cy=otp-slot]").should("have.length", 6);

    // Verify the presence of the Verify Code button
    cy.contains("button", "Verify Code").should("exist");
  });
});
