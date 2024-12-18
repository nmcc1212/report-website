describe('page loads', () => {
  it('loads home page', () => {
    cy.visit('http://localhost:5173/home')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.sticky > .gap-4').click();
    cy.get('.sticky').should('be.visible');
    cy.get('.p-4').should('be.visible');
    cy.get('[x-chunk="A card showing the total revenue in USD and the percentage difference from last month."] > .flex').should('be.visible');
    cy.get('[x-chunk="A card showing the total subscriptions and the percentage difference from last month."] > .flex > .tracking-tight').should('have.text', 'Subscriptions');
    cy.get('[x-chunk="A card showing the total subscriptions and the percentage difference from last month."] > .pt-0 > .text-2xl').should('have.text', '+2350');
    cy.get('[x-chunk="A card showing the total subscriptions and the percentage difference from last month."] > .pt-0 > .text-xs').should('have.text', '+180.1% from last month');
    /* ==== End Cypress Studio ==== */
  })
  it('loads login page', () => {
    cy.visit('http://localhost:5173/login')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.gap-4 > :nth-child(1) > .text-sm').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('.items-center > .font-medium').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('.bg-primary').should('be.visible');
    cy.get('.py-12').click();
    /* ==== End Cypress Studio ==== */
  })
  it('loads register page', () => {
    cy.visit('http://localhost:5173/register')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.font-semibold').should('be.visible');
    cy.get('.grid-cols-2 > :nth-child(1) > .text-sm').should('be.visible');
    cy.get('#first-name').should('be.visible');
    cy.get('.grid-cols-2 > :nth-child(2) > .text-sm').should('be.visible');
    cy.get('#last-name').should('be.visible');
    cy.get('.pt-0 > :nth-child(1) > :nth-child(2) > .text-sm').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get(':nth-child(3) > .text-sm').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('.bg-primary').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
  it('loads 2fa page', () => {
    cy.visit('http://localhost:5173/2fa')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.grid > .font-medium').should('be.visible');
    cy.get('.disabled\\:cursor-not-allowed').should('be.visible');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.inline-flex').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
  it('loads new transactions page', () => {
    cy.visit('http://localhost:5173/new-transaction')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[x-chunk="A card with a form to edit the product details"] > .pt-0 > .gap-6 > :nth-child(1) > .text-sm').should('be.visible');
    cy.get('#name').should('be.visible');
    cy.get('[x-chunk="A card with a form to edit the product details"] > .pt-0 > .gap-6 > :nth-child(2) > .text-sm').should('be.visible');
    cy.get('#description').should('be.visible');
    cy.get('#status').should('be.visible');
    cy.get('.hidden > .bg-primary').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
  it('loads transactions page', () => {
    cy.visit('http://localhost:5173/transactions')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.rounded-xl > :nth-child(2)').should('be.visible');
    cy.get(':nth-child(1) > .p-2.font-medium').should('be.visible');
    cy.get(':nth-child(2) > .p-2.font-medium').should('be.visible');
    cy.get(':nth-child(3) > .p-2.font-medium').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})