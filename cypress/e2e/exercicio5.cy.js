describe('Exercicio 5', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwNzk3YmY5YS1iNTE0LTQ3OTMtOGRiOC05MTBkMGViMGQxMDAiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTcyMjM1NTM3NywiZXhwIjoxNzIyNjE0NTc3fQ.fxKLJhb-OD_okEVBnvHwFdp0JUN8zh87XUygQk7OKZA`

    it('Nome do perfil', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0797bf9a-b514-4793-8db8-910d0eb0d100',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Ana de Jesus')
        })
    })

    it('Deletar todas as tarefas', () =>{
        cy.visit('https://example.cypress.io/todo')
        cy.get(':nth-child(1) > .view > .toggle').click(); 
        cy.get(':nth-child(2) > .view > .toggle').click(); 
        cy.contains('Clear completed').click()
        cy.contains('Clear completed').should('not.exist')
    })

    it('Para filtrar tarefas completas', () => {
        cy.visit('https://example.cypress.io/todo')
        cy.get(':nth-child(1) > .view > .toggle').click();
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1).first().should('have.text', 'Pay electric bill')
        cy.contains('Walk the dog').should('not.exist')
     })
 
})