///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista - usando primeiro da lista', () => {
        cy.get('.product-block ')
            .first()
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    })

    it('Deve selecionar um produto da lista - usando ultimo da lista', () => {
        cy.get('.product-block ')
            .last()
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    })

    it('Deve selecionar um produto da lista - escolhendo um da lista', () => {
        cy.get('.product-block ')
            .eq(7)
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    })

    it('Deve selecionar um produto da lista - escolhendo um da lista', () => {
        cy.get('.product-block ')
            .contains('Aero Daily Fitness Tee')
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
});