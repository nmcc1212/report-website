import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

describe("<ModeToggle />", () => {
  beforeEach(() => {
    cy.mount(<ThemeProvider><ModeToggle /></ThemeProvider>);
  });
  it("should switch to light theme when Light is clicked", () => {
    cy.get('[data-testid="theme-toggle-button"]').click();
    cy.get('[data-testid="dropdown-item-light"]').click();

    // Check for light theme class or indicator
    cy.document().then((doc) => {
      expect(doc.documentElement.classList.contains("light")).to.be.true;
    });

  });

  it("should switch to dark theme when Dark is clicked", () => {
    cy.get('[data-testid="theme-toggle-button"]').click();
    cy.get('[data-testid="dropdown-item-dark"]').click();

    // Check for dark theme class or indicator
    cy.document().then((doc) => {
      expect(doc.documentElement.classList.contains("dark")).to.be.true;
    });
  });

  it("should switch to system theme when System is clicked", () => {
    cy.get('[data-testid="theme-toggle-button"]').click();
    cy.get('[data-testid="dropdown-item-system"]').click();

    cy.getAllLocalStorage().then((ls) => {
      expect(ls["http://localhost:5173"]["vite-ui-theme"]).to.equal("system");
    })
  });
});
