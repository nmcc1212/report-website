describe('login and create transaction', () => {
  it('valid login', function() {
    cy.visit('http://localhost:5173/login');
    cy.get('#email').click();
    cy.get('#email').type('valid@example.com');
    cy.get('#password').clear('p');
    cy.get('#password').type('password');
    cy.get('.bg-primary').click();
    cy.url().should('include', '/home')
    cy.url().should('not.include', '/login')
    cy.get('[cy-data="new-transaction"]').click(); // click new transaction button on home page
    cy.get('#name').clear('in');
    cy.get('#name').type('invoice number 3');
    cy.get('#description').type('invoice number 3 description');
    cy.get('.hidden > .bg-primary').click(); // save button
    /* ==== End Cypress Studio ==== */
  });
  it('invalid login', function() {
    cy.visit('http://localhost:5173/login');
    cy.get('#email').click();
    cy.get('#email').type('invalid@example.com');
    cy.get('#password').clear('p');
    cy.get('#password').type('invalid-password');
    cy.get('.bg-primary').click();
    cy.url().should('include', '/login')
    cy.url().should('not.include', '/home')
    cy.get('.text-red-500').should('have.text', 'Invalid email or password. Please try again.');
  });
})