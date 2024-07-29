describe('Exercicío 1', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Testar o botão "Ver pets disponíveis para adoção”', () => {
        cy.get('.button').click();
    })

    it('Tester o botão home', ()=>{
        cy.get('.header__home').click();  
    })

    it('Carregar a pagina de /login', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    })

    it('Carregar a pagina /home', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    })

    it('Carregar a pagina /home e clicar no botão "Falar com responsável"', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.card__contact').first().click();
    })
  })
  