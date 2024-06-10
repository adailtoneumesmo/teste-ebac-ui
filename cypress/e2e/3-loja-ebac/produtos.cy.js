///<reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()   
     });

    it('Deve selecionar um produto da lista - usando primeiro da lista', () => {
        cy.get('.product-block ')
            .first()
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

    it('Deve Buscar um produto com sucesso', () => {
        produtosPage.bsucarProdutoLista('Arcadio Gym Short')
    });

    it.only('Deve visitar a pagina do produtos', () => {
        let produto = 'Ariel Roll Sleeve Sweatshirt'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve adicionar o produto ao carrinho', () => {
        
    });

});
