///<reference types="cypress"/>


describe('', () => {});

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('adailton.vini.silva@gmail.com')
        cy.get('#password').type('Eumesmo@11060')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, adailton.vini.silva (não é adailton.vini.silva? Sair)')
        cy.get('a > .hidden-xs').should('contain' , 'Welcome adailton.vini.silva !')
    });

    it('Deve exibir uma mensagem de erro ao inseriri usuário invalido', () => {
        
        cy.get('#username').type('adailton.kk@gmail.com')
        cy.get('#password').type('Eumesmo@11060')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido')
        cy.get('.woocommerce-error > li').should('exist')
    
    });
    
    it('Deve exibir uma mensagem de erro ao inseriri senha invalido', () => {
        
        cy.get('#username').type('adailton.vini.silva@gmail.com')
        cy.get('#password').type('Eumesmo@1106099')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para')
        cy.get('.woocommerce-error > li').should('exist')
});