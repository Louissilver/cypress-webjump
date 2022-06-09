# language: pt

Funcionalidade: Teste QA

Sendo um usuário da aplicação
Posso acessar a tela inicial
Para realizar testes nos campos da tela

Contexto:
    Dado que o usuário acessa a aplicação


Cenário: Clicar nos botões da tela
    Quando clica nos botões
      | Botoes     |
      | Botão One  |
      | Botão Two  |
      | Botão Four |
    Então verifica que os botões não estão sendo exibidos na tela
      | Botoes     |
      | Botão One  |
      | Botão Two  |
      | Botão Four |

Cenário: Clicar nos botões do iframe
    Quando clica nos botões
      | Botoes            |
      | Botão Iframe One  |
      | Botão Iframe Two  |
      | Botão Iframe Four |
    Então verifica que os botões não estão sendo exibidos na tela
      | Botoes            |
      | Botão Iframe One  |
      | Botão Iframe Two  |
      | Botão Iframe Four |

Cenário: Validar itens da tela
    Quando preenche nos campos
      | Campo         | Valor          |
      | YourFirstName | Texto qualquer |
      E clica nos botões
      | Botoes    |
      | Botão One |
      E marca os checkbox
      | Checkbox    |
      | OptionThree |
    E seleciona a opção "ExampleTwo" no select
    Então verifica a presença da imagem "Selenium Webdriver"