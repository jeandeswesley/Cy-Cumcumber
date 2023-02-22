///<reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


When('Eu digito o primeiro nome', () => {
    cy.get('[name="first_name"]').type('Jeandes')
})

When('Eu digito o ultimo nome', () => {
    cy.get('[name="last_name"]').type('Martins')
})

When('Eu digito um endereço de e-mail', () => {
    cy.get('[name="email"]').type('email@fake.com')
})

When('Eu digito um comentário', () => {
    cy.get('textarea[name="message"]').type('Escrevendo um comentario')
})

When('Eu clico no botão SUBMIT', () => {
    cy.get('[type="submit"]').click()
})

Then('Você deve receber uma mensagem de envio de contato bem sucessdida', () => {
    cy.get('h1').should('have.text', 'Thank You for your Message!')
})