///<reference types="cypress"/>

describe('Funcionalidade: Login', () =>{

it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('adailton.vini.silva@gmail.com')
    cy.get('#password').type('Eumesmo@11060')
    cy.get('.woocommerce-form > .button').click()
    
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, adailton.vini.silva (não é adailton.vini.silva? Sair)')
    cy.get('a > .hidden-xs').should('contain' , 'Welcome adailton.vini.silva !')
    
});
})