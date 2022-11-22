/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Home page', () => {
  it('finds main title', () => {
    cy.findByRole('heading', { name: /welcome to next\.js!/i });
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
