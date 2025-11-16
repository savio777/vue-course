describe('Home page', () => {
  it('Flow test', () => {
    cy.visit('http://localhost:5173/')

    cy.contains('Become a Vue Dev').should('be.visible')
    cy.contains('For Developers').should('be.visible')
    cy.contains('For Employers').should('be.visible')
    cy.contains('View All Jobs').should('be.visible')

    cy.wait(1000)

    cy.contains('Browse Jobs').click({ force: true })

    cy.wait(500)

    cy.contains('Browse Jobs').should('be.visible')

    cy.contains('Read More').first().click({ force: true })

    cy.wait(500)

    cy.contains('Company Info').should('be.visible')
    cy.contains('Job Description').should('be.visible')

    cy.contains('Edit Job').click({ force: true })

    cy.wait(1000)

    cy.contains('Edit Job').should('be.visible')

    cy.wait(1000)
    cy.contains('Add Job').click({ force: true })

    cy.wait(1000)
    cy.contains('Edit Job').should('not.exist')
  })
})
