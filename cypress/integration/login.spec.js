/// <reference types="cypress" />

context('Funcionalidade login', () =>{

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    
        afterEach(() => {
            cy.screenshot()
        });

    it('Deve fazer login com sucess', () =>{
      cy.get('#username') .type('aluno_ebac@teste.com')
      cy.get('#password') .type('teste@teste.com')
      cy.get('.woocommerce-form > .button') .click()

      cy.get('.page-title').should('contain' , 'Minha conta')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, aluno_ebac (não é aluno_ebac? Sair)')

    })
   
    it('Deve exibir mensagem de erro ao inserir usuário inválido', () =>{
      cy.get('#username') .type('aluno_ebac@teste')
      cy.get('#password') .type('teste@teste.com')
      cy.get('.woocommerce-form > .button') .click()
      cy.get('.woocommerce-error > li').should('contain' , 'Erro: O usuário aluno_ebac@teste não está registrado neste site')

    })

    it('Deve exibir mensagem de erro ao inserir senha inválida', () =>{
      cy.get('#username') .type('aluno_ebac@teste.com')
      cy.get('#password') .type('teste')
      cy.get('.woocommerce-form > .button') .click()
      cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
})

})