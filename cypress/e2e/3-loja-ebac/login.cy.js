///<reference types="cypress"/>
const teste = require('../../fixtures/perfil.json')
describe('Funcionalidade de Login', () => { });

beforeEach(() => {
    cy.visit('minha-conta')
});

afterEach(() => {
    cy.screenshot()
});

it('Deve fazer login com sucesso', () => {

    cy.get('#username').type('adailton.vini.silva@gmail.com')
    cy.get('#password').type('Eumesmo@11060')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, adailton.vini.silva (não é adailton.vini.silva? Sair)')
    cy.get('a > .hidden-xs').should('contain', 'Welcome adailton.vini.silva !')
});

it('Deve exibir uma mensagem de erro ao inseriri usuário invalido', () => {

    cy.get('#username').type('adailton.kk@gmail.com')
    cy.get('#password').type('Eumesmo@11060')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    cy.get('.woocommerce-error > li').should('exist')

});

it('Deve exibir uma mensagem de erro ao inseriri senha invalido', () => {

    cy.get('#username').type('adailton.vini.silva@gmail.com')
    cy.get('#password').type('Eumesmo@1106099')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para')
    cy.get('.woocommerce-error > li').should('exist')
});

it.only('Deve fazer login com sucesso - usando massa de dados perfil', () => {
    cy.get('#username').type(teste.usuario)
    cy.get('#password').type(teste.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, adailton.vini.silva (não é adailton.vini.silva? Sair)')
    cy.get('a > .hidden-xs').should('contain', 'Welcome adailton.vini.silva !')


});
