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

    // Preencher campos diretamente por id (sem foreach)
    cy.get('#type').select('Remote', { force: true }) // Job Type
    cy.get('#name').clear({ force: true }).type('Vaga Cypress - front-end', { force: true })
    cy.get('#description')
      .clear({ force: true })
      .type('Descrição preenchida via Cypress para testes.', { force: true })
    cy.get('#salary').select('$100K - $125K', { force: true })
    cy.get('#location').clear({ force: true }).type('São Paulo, BR', { force: true })
    cy.get('#company').clear({ force: true }).type('Empresa Exemplo', { force: true })
    cy.get('#company_description')
      .clear({ force: true })
      .type('Empresa focada em desenvolvimento web.', { force: true })
    cy.get('#contact_email').clear({ force: true }).type('teste@example.com', { force: true })
    cy.get('#contact_phone').clear({ force: true }).type('+5511999999999', { force: true })

    cy.scrollTo('bottom')

    cy.wait(500)

    cy.get("button:contains('Add Job')").click({ force: true })

    cy.wait(1000)
  })
})
