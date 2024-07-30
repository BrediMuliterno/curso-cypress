describe('Página de cadastro', () => {
  beforeEach(() =>{
    cy.visit('https://adopet-frontend-iota.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })   
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('Lora', 'lora@email.com', 'Senha123');
  })
})
