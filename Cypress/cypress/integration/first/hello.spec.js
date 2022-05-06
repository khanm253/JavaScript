/// <reference types="cypress" />

describe('Test suite', () => {
    it('test1', () => {
        cy.visit('https://codedamn.com');
        cy.contains('Learn Programming').should('exist');
        // cy.get('[data-testid="homepage-cta"]').click()
        // cy.url().should('include', '/learning-paths');
        cy.get('[data-testid="name"]').type('Name');
        cy.get('[data-testid="username"]').type('User Name');
    })
});