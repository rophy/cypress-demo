/// <reference types="cypress" />

context('Network Requests', () => {
  beforeEach(() => {
    cy.visit('/www/index.html')
  })

  it('cy.intercept() with multiple calls in browser', () => {
    cy.intercept("https://jsonplaceholder.cypress.io/**", {
      statusCode: 200,
      body: "mocked OK!"
    }).as("jsonplaceholder");
  })
  
})
