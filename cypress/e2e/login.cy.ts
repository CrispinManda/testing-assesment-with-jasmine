describe('Login Form', () => {
  beforeEach(() => {
    // Assuming your application is running on localhost:3000
    cy.visit('http://localhost:4200/login');
  });

  it('should display error messages for invalid form submission', () => {
    // Attempt to submit the form without filling in any fields
    cy.get('[data-cy=login-btn]').click();

    // Check if error messages are displayed for both email and password
    cy.get('[data-cy=email]').should('have.class', 'text-red-500').and('contain.text', 'Email is required');
    cy.get('[data-cy=password]').should('have.class', 'text-red-500').and('contain.text', 'Password is required');
  });

  it('should display error message for invalid email format', () => {
    // Type an invalid email format
    cy.get('[data-cy=email]').type('Crispin@gmail.com');

    // Click the login button
    cy.get('[data-cy=login-btn]').click();

    // Check if error message is displayed for invalid email format
    cy.get('[data-cy=email]').should('have.class', 'text-red-500').and('contain.text', 'Email is required');
  });

  it('should display error message for missing password', () => {
    // Fill in a valid email but leave password empty
    cy.get('[data-cy=email]').type('dan@yopmail.com');

    // Click the login button
    cy.get('[data-cy=login-btn]').click();

    // Check if error message is displayed for missing password
    //cy.get('[data-cy=password]').should('have.class', 'text-red-500').and('contain.text', 'Password is required');
  });

  it('should successfully submit the form with valid credentials', () => {
    // Fill in valid email and password
    cy.get('[data-cy=email]').type('dan@yopmail.com');
    cy.get('[data-cy=password]').type('12345678');

   
    
    cy.get('[data-cy=login-btn]').click();

  });
});
