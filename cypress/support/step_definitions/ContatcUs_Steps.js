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

Then('Você deve receber uma mensagem de envio de contato mau sucessdida', () => {
    cy.get('body').contains('Error: Invalid email address')
})

When('Eu digito o primeiro nome {string}', (firstname) => {
    cy.get('[name="first_name"]').type(firstname)
})

When('Eu digito o ultimo nome {string}', (lastname) => {
    cy.get('[name="last_name"]').type(lastname)
})

When('Eu digito um endereço de e-mail {string}', (email) => {
    cy.get('[name="email"]').type(email)
})

When('Eu digito um comentário {string} e um numero {int} no input', (word, number) => {
    cy.get('textarea[name="message"]').type(word + " " + number)
})

When('Eu digito o primeiro nome {word} e o ultimo nome {string}', (firstName, lastName) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
})

When('Eu digito um endereço de {string} e um comentario {string}', (email, comment) => {
    cy.get('[name="email"]').type(email)
    cy.get('textarea[name="message"]').type(comment)
})

Then('Deve ser apresetado o texto de sucesso {string}', (message) => {
    cy.xpath("//h1 | //body").contains(message);
})