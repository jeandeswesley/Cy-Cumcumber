Feature: Webdriveruniversity - Pagina de Contato

Background: Pré condições
    Given Eu navegar para a pagina da webdriveruniversity
    When Eu clico no botão contact us

  Scenario: Valida formulario de Contato Submission    
    And Eu digito o primeiro nome
    And Eu digito o ultimo nome
    And Eu digito um endereço de e-mail
    And Eu digito um comentário
    And Eu clico no botão SUBMIT
    Then Você deve receber uma mensagem de envio de contato bem sucessdida

  Scenario: Invalido formulario de Contato Submission    
    And Eu digito o primeiro nome
    And Eu digito o ultimo nome
    And Eu digito um comentário
    And Eu clico no botão SUBMIT
    Then Você deve receber uma mensagem de envio de contato mau sucessdida

  Scenario: Invalido formulario de Contato Submission - Usando dados especificos    
    And Eu digito o primeiro nome "Jose"
    And Eu digito o ultimo nome "Martins"
    And Eu digito um comentário "Comentario teste especifico" e um numero 987 no input
    And Eu clico no botão SUBMIT
    Then Você deve receber uma mensagem de envio de contato mau sucessdida


  Scenario: Validar pagina de Contato    
    And Eu digito o primeiro nome <firstName> e o ultimo nome '<lastName>'
    And Eu digito um endereço de '<emailAddress>' e um comentario '<comment>'
    And Eu clico no botão SUBMIT
    Then Deve ser apresetado o texto de sucesso '<message>'

    Examples:
      | firstName | lastName | emailAddress      | comment          | message                      |
      | Gabriel   | Martins  | fakegab@email.com | Minha mensagem 1 | Thank You for your Message!  |
      | Clarisse  | Martins  | fakecla@email.com | Minha mensagem 2 | Thank You for your Message!  |
      | Camila    | Martins  | fakeca            | Minha mensagem 3 | Error: Invalid email address |
