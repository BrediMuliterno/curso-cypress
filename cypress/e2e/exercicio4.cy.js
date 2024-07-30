describe('Exercicío 1', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

    it('Verificar se as imagens dos pets aparecem', () => {
        cy.get('.cards').should('be.visible');
    })
  })