# cypress-webjump

Teste de QA Webjump

## Ferramentas utilizadas:

- NodeJS versão 16.13.2
- NPM versão 8.1.2
- Cypress versão 9.4.1

## Setup do projeto de testes com Cypress

### Clonando o projeto

1. Clique no botão 'Clone'
2. Escolha uma das opções (_Clone with SSH_ ou _Clone with HTTPS_) e então clique no botão _Copy URL_ ao lado do campo da opção escolhida
3. No terminal, no diretório onde você armazena seus projetos de software, digite `git clone [URL copiada no passo anterior] e pressione ENTER
4. Por fim, acesso o diretório do projeto recém clonado (`cd cypress-webjump/`)

### Inicializando o NPM dos Projetos de Teste

No terminal, dentro do diretório `cypress-webjump/`, execute o comando `npm install` (este comando irá instalar as dependências listadas no `package.json` do projeto de testes)

#### Executando os testes em modo interativo

Para executar os testes do projeto em modo interativo, dentro do diretório `cypress-webjump/` execute o comando `npx cypress open`. Após carregar todas as informações necessárias, o Cypress irá abrir uma aplicação Electron com a listagem dos arquivos de teste

Para executar um arquivo de specs/features basta clicar em um dos arquivos e uma nova janela será aberta já executando os testes

#### Executando os testes em modo headless

Para executar os testes sem abrir um navegador, dentro do diretório `cypress-webjump/` execute o comando `npx cypress run`. Após carregar as informações necessárias, os testes serão executados sem que seja possível visualizar o que está acontecendo em tela. Ao final da execução, deveremos ter um resultado parecido com esse:

    Spec                                                Tests  Passing  Failing  Pending  Skipped

┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ✔ socialNetworks/Facebook.feature 00:04 2 2 - - - │
├────────────────────────────────────────────────────────────────────────────────────────────────┤
│ ✔ socialNetworks/GitHub.feature 00:05 2 2 - - - │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
All specs passed! 00:09 4 4 - - -
