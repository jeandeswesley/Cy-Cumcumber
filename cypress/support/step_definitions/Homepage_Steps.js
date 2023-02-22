///<reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor/lib/methods";


const url = "https://webdriveruniversity.com/"

Given(`Eu navegar para a pagina da webdriveruniversity`, () => {
    cy.visit(url)
})

When(`Eu clico no botão contact us`, () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
})