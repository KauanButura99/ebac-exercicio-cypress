/// <reference types='cypress'/>

describe('Funcionalidade de Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve fazer login com sucesso ', () => {
    cy.get('#username').type('pedrosantos@gmail.com')
    cy.get('#password').type('12345')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', "Minha conta")
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, pedrosantos ')
  });

  it('Deve mostrar uma mensagem de erro ao inserir um email inválido', () => {
    cy.get('#username').type('pedrosantos@gmail.net')
    cy.get('#password').type('12345')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
  });

  it('Deve mostra uma mensagem de erro ao inserir a senha errada', () => {
    cy.get('#username').type('pedrosantos@gmail.com')
    cy.get('#password').type('1234@')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', "Erro: a senha fornecida para o e-mail pedrosantos@gmail.com ")

  });
});