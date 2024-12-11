import Dashboard from "@/components/authentication-04";

describe("Dashboard - Login Form", () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.mount(<Dashboard />);
  });

  it("should allow user to input email and password", () => {
    // Check if the email input is visible and type an email
    cy.get("input#email")
      .should("be.visible")
      .type("test@example.com")
      .should("have.value", "test@example.com");

    // Check if the password input is visible and type a password
    cy.get("input#password")
      .should("be.visible")
      .type("password123")
      .should("have.value", "password123");
  });

  it("should show an error message for invalid email format", () => {
    // Type an invalid email
    cy.get("input#email").type("invalid-email");

    // Check if the error message appears
    cy.get("p.text-red-500")
      .should("be.visible")
      .and("contain.text", "Please enter a valid email address.");
  });

  it("should not show an error message for valid email format", () => {
    // Type a valid email
    cy.get("input#email").type("valid@example.com");

    // Ensure the error message does not appear
    cy.get("p.text-red-500").should("not.exist");
  });
});
