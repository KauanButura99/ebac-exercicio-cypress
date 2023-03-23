/// <reference types='cypress'/>

describe('Funcionalidade pagina de produtos produto', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve selecionar um item da lista', () => {
    cy.get('[class="product-block grid"]')
      .contains('Arcadio Gym Short')
      .click()

    cy.get('.product_title').should('contain', 'Arcadio Gym Short')
  });

  it.only('Deve configurar o produto e colocar no carrinho com sucesso', () => {
    let quantidade = 3

    cy.get(':nth-child(2) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
      .contains('Balboa Persistence Tee')
      .click()

    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Gray').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', quantidade + ' × “Balboa Persistence Tee” foram adicionados no seu carrinho.')
  });
});