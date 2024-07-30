describe('Exercicío 3', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Verifique se o title com o texto “AdoPet” está presente no html.', () => {
        cy.title().should('eq', 'AdoPet');
    })

    it('Verificar se o texto "Quem ama adota!" está presente no html', ()=>{
        cy.contains('p', 'Quem ama adota!').should('be.visible');
    })

    it('Verificar se o texto "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!" está presente no html', () => {
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })

    it('Fluxo de login pelo ícone de mensagem no header com login válido', () => {
        cy.get('.header__message').click();
        cy.login('ana@email.com', 'Senha123');
    })
  })