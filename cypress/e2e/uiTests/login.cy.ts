describe('Login flow', () => {
  it('logs in successfully', () => {
    cy.visit('/')
    cy.get('[data-testid="login-email"]').type('qa@example.com')
    cy.get('[data-testid="login-password"]').type('Password123')
    cy.get('[data-testid="login-submit"]').click()
    cy.get('[data-testid="current-user"]').should('contain', 'qa@example.com')
  })
})