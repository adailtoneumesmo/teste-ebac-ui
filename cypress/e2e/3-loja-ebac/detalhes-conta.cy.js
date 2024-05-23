///<reference types="cypress"/>

describe('Funcionalidades: Detalhes da conta', () => {
    
    beforeEach(() => {
        cy.visit('/minha-conta/edit-account/')
        cy.login('adailton.vini.silva@gmail.com' , 'Eumesmo@11060')
    });

    it('Deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Adailton' ,  'Silva' , 'Adailton.QA')
        cy.get('.woocommerce-message').should('exist')
    });
});