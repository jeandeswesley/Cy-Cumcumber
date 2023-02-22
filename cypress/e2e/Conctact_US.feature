Feature: Webdriveruniversity - Pagina de Contato

  Scenario: Valida formulario de Contato Submission
    Given Eu navegar para a pagina da webdriveruniversity
    When Eu clico no botão contact us
    And Eu digito o primeiro nome
    And Eu digito o ultimo nome
    And Eu digito um endereço de e-mail
    And Eu digito um comentário
    And Eu clico no botão SUBMIT
    Then Você deve receber uma mensagem de envio de contato bem sucessdida

