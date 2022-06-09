import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import QATestPageObject from '../pageobjects/QATestPageObject';

const qATestPageObject = new QATestPageObject();

Given(/^que o usuário acessa a aplicação$/, () => {
  qATestPageObject.acessarSite();
});

When(/^clica nos botões$/, (botoes) => {
  qATestPageObject.clicarNosBotoes(botoes);
});

When(/^clica nos botões do iframe$/, (botoes) => {
  qATestPageObject.clicarNosBotoesIframe(botoes);
});

When(/^preenche nos campos$/, (valores) => {
  qATestPageObject.preencherCampos(valores);
});

When(/^marca os checkbox$/, (valores) => {
  qATestPageObject.marcarCheckbox(valores);
});

When(/^seleciona a opção "([^"]*)" no select$/, (opcao) => {
  qATestPageObject.selecionarOpcaoSelect(opcao);
});

Then(/^verifica a presença da imagem "([^"]*)"$/, (imagem) => {
  qATestPageObject.verificarImagem(imagem);
});

Then(/^verifica que os botões não estão sendo exibidos na tela$/, (botoes) => {
  qATestPageObject.verificarBotoes(botoes);
});
