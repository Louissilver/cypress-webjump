const url = Cypress.config('baseUrl');

const buttonOne = () => '#btn_one';
const buttonTwo = () => '#btn_two';
const buttonThree = () => '#btn_three';
const buttonFour = () => '#btn_link';
const iframeButtonOne = () => '#btn_one';
const iframeButtonTwo = () => '#btn_two';
const iframeButtonThree = () => '#btn_three';
const iframeButtonFour = () => '#btn_link';
const inputYourFirstName = () => '#first_name';
const checkboxOptionThree = () => '#opt_three';
const select = () => '#select_box';
const imageSelenium = () => '[alt="selenium"]';

class QATestPageObject {
  acessarSite() {
    cy.visit(url);
  }

  marcarCheckbox(opcoes) {
    opcoes.hashes().forEach((element) => {
      const checkbox = element.Checkbox;
      switch (checkbox) {
        case 'OptionThree': {
          cy.get(checkboxOptionThree()).check();
          break;
        }
        default: {
          throw new Error('Checkbox não encontrado.');
        }
      }
    });
  }

  selecionarOpcaoSelect(opcao) {
    switch (opcao) {
      case 'ExampleTwo': {
        cy.get(select()).select(opcao).should('have.value', 'option_two');
        break;
      }
      default: {
        throw new Error('Imagem não encontrada.');
      }
    }
  }

  verificarImagem(imagem) {
    switch (imagem) {
      case 'Selenium Webdriver': {
        cy.get(imageSelenium()).should('be.visible');
        break;
      }
      default: {
        throw new Error('Imagem não encontrada.');
      }
    }
  }

  preencherCampos(valores) {
    valores.hashes().forEach((element) => {
      const campo = element.Campo;
      const valor = element.Valor;
      switch (campo) {
        case 'YourFirstName': {
          cy.get(inputYourFirstName()).type(valor).should('have.value', valor);
          break;
        }
        default: {
          throw new Error('Botão não encontrado.');
        }
      }
    });
  }

  clicarNosBotoes(opcoes) {
    opcoes.hashes().forEach((element) => {
      const botoes = element.Botoes;
      switch (botoes) {
        case 'Botão One': {
          cy.get(buttonOne()).click();
          break;
        }
        case 'Botão Two': {
          cy.get(buttonTwo()).click();
          break;
        }
        case 'Botão Three': {
          cy.get(buttonThree()).click();
          break;
        }
        case 'Botão Four': {
          cy.get(buttonFour()).click();
          break;
        }
        case 'Botão Iframe One': {
          cy.get('#iframe_panel_body > iframe')
            .scrollIntoView()
            .its('0.contentDocument.body')
            .find(iframeButtonOne())
            .click();
          break;
        }
        case 'Botão Iframe Two': {
          cy.get('#iframe_panel_body > iframe')
            .scrollIntoView()
            .its('0.contentDocument.body')
            .find(iframeButtonTwo())
            .click();
          break;
        }
        case 'Botão Iframe Three': {
          cy.get('#iframe_panel_body > iframe')
            .scrollIntoView()
            .its('0.contentDocument.body')
            .find(iframeButtonThree())
            .click();
          break;
        }
        case 'Botão Iframe Four': {
          cy.get('#iframe_panel_body > iframe')
            .scrollIntoView()
            .its('0.contentDocument.body')
            .find(iframeButtonFour())
            .click();
          break;
        }
        default: {
          throw new Error('Botão não encontrado.');
        }
      }
    });
  }

  verificarBotoes(opcoes) {
    opcoes.hashes().forEach((element) => {
      const botoes = element.Botoes;
      switch (botoes) {
        case 'Botão One': {
          cy.get(buttonOne()).should('not.be.visible');
          break;
        }
        case 'Botão Two': {
          cy.get(buttonTwo()).should('not.be.visible');
          break;
        }
        case 'Botão Three': {
          cy.get(buttonThree()).should('not.be.visible');
          break;
        }
        case 'Botão Four': {
          cy.get(buttonFour()).should('not.be.visible');
          break;
        }
        case 'Botão Iframe One': {
          cy.get('#iframe_panel_body > iframe')
            .scrollIntoView()
            .its('0.contentDocument.body')
            .find(iframeButtonFour())
            .should('not.be.visible');
          break;
        }
        case 'Botão Iframe Two': {
          cy.get('#iframe_panel_body > iframe')
            .scrollIntoView()
            .its('0.contentDocument.body')
            .find(iframeButtonFour())
            .should('not.be.visible');
          break;
        }
        case 'Botão Iframe Three': {
          cy.get('#iframe_panel_body > iframe')
            .scrollIntoView()
            .its('0.contentDocument.body')
            .find(iframeButtonFour())
            .should('not.be.visible');
          break;
        }
        case 'Botão Iframe Four': {
          cy.get('#iframe_panel_body > iframe')
            .scrollIntoView()
            .its('0.contentDocument.body')
            .find(iframeButtonFour())
            .should('not.be.visible');
          break;
        }
        default: {
          throw new Error('Botão não encontrado.');
        }
      }
    });
  }
}

export default QATestPageObject;
