class ProdutosPage {

visitarUrl(){
    cy.visit('produtos')
}

buscarProduto(nomeProduto) {
   cy.get('[name="s"]').eq(1).type(nomeProduto)
   cy.get('.button-search').eq(1).click()
}

bsucarProdutoLista(nomeProduto){
    cy.get('.product-block ')
    .contains(nomeProduto)
    .click()
}

visitarProduto() {

}

addProdutoCarrinho(){

}

}

export default new ProdutosPage()