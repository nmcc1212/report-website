import Dashboard from "@/components/authentication-04";
import { BrowserRouter } from "react-router-dom";

describe("Dashboard - Login Form", () => {
  beforeEach(() => {
    // Visit the page before each test
    cy.mount(<BrowserRouter><Dashboard /></BrowserRouter>);
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

  it("should show an error message for invalid credentials", () => {
    // Type an invalid email
    cy.get("input#email").type("invalid@example.com");
    cy.get("input#password").type("invalid-password");
    cy.get('.bg-primary').click();


    // Check if the error message appears
    cy.get("p.text-red-500")
      .should("be.visible")
      .and("contain.text", "Invalid email or password. Please try again.");
  });
  it("should not show an error message for valid credentials", () => {
    // Type a valid email
    cy.get("input#email").type("valid@example.com");
    cy.get("input#password").type("password");
    cy.get('.bg-primary').click();

    // Ensure the error message does not appear
    cy.get("p.text-red-500").should("not.exist");

  });
});
