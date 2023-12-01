describe('Registration Form', () => {
  beforeEach(() => {
    // Assuming your application is running on localhost:3000
    cy.visit('http://localhost:4200/login');
  });

  it('should display error messages for invalid form submission', () => {
    // Attempt to submit the form without filling in any fields
    cy.get('[data-cy=register-btn]').click();

    // Check if error messages are displayed for all required fields
    cy.get('[data-cy=fullname]').should('have.class', 'text-red-500').and('contain.text', 'Full Name is required');
    cy.get('[data-cy=regemail]').should('have.class', 'text-red-500').and('contain.text', 'Email is required');
    cy.get('[data-cy=regpass]').should('have.class', 'text-red-500').and('contain.text', 'Password is required');
    cy.get('[data-cy=regconfirmpass]').should('have.class', 'text-red-500').and('contain.text', 'Confirm Password is required');
  });

  it('should display error message for invalid email format', () => {
    // Type an invalid email format
    cy.get('[data-cy=regemail]').type('cri.com');

    // Click the register button
    cy.get('[data-cy=register-btn]').click();

    // Check if error message is displayed for invalid email format
    cy.get('[data-cy=regemail]').should('have.class', 'text-red-500').and('contain.text', 'Email is required');
  });

  it('should display error message for password mismatch', () => {
    // Fill in valid email and passwords, but with mismatched confirm password
    cy.get('[data-cy=fullname]').type('John Doe');
    cy.get('[data-cy=regemail]').type('validemail@example.com');
    cy.get('[data-cy=regpass]').type('validpassword');
    cy.get('[data-cy=regconfirmpass]').type('mismatchedpassword');

    // Click the register button
    cy.get('[data-cy=register-btn]').click();

    // Check if error message is displayed for password mismatch
    cy.get('[data-cy=regconfirmpass]').should('have.class', 'text-red-500').and('contain.text', 'Confirm Password must match Password');
  });

  it('should successfully submit the form with valid credentials', () => {
    // Fill in valid registration details
    cy.get('[data-cy=fullname]').type('John Doe');
    cy.get('[data-cy=regemail]').type('validemail@example.com');
    cy.get('[data-cy=regpass]').type('12345678');
    cy.get('[data-cy=regconfirmpass]').type('12345678');

    // Click the register button
    cy.get('[data-cy=register-btn]').click();

    // You can add assertions here based on the behavior after successful registration
    // For example, check if the user is redirected to the expected page
  });
});
