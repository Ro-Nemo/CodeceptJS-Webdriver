var faker = require('faker');
faker.locale = 'en_US';
var CPF = require("cpf_cnpj").CPF;
var CNPJ = require("cpf_cnpj").CNPJ;

Feature('Proto');

Scenario('test something', async ({ I, pO_SearchPage, pO_RegisterPage }) => {
  var Fname = faker.name.firstName();
  var Lname = faker.name.lastName();
  var nome = Fname + ' ' + Lname;
  var empresa = faker.company.companyName();
  var numero = faker.random.number()
  var age = faker.random.number({min:18, max:45}); 
  var emailError = Lname + numero + 'gmail.com';
  var email = Fname + numero + '@ymail.com';
  var email2 = numero + '@mailnesia.com';

  

//Envio de E-mail


  //Enviar um email para o endereco via mailslurp API
  const mailbox = await I.haveNewMailbox();
  I.openMailbox(mailbox);
  I.sendEmail({
    to: [email2],
    subject: 'Hello' + ' ' + Fname,
    body: 'CODE' + ' ' + numero
  });

  //Acessar pagina mailnesia.com
  I.amOnPage('https://mailnesia.com/');
  I.wait(3);
  //Visualizar o elemento "Anonymous E-Mail In Seconds" na tela
  I.see('Anonymous E-Mail In Seconds'); 
  //Preencher o campo de email destinatario
  I.fillField('//*[@id="mailbox"]', numero);
  //Clicar no botao 'Flecha=Submit' na tela
  I.click('//*[@id="sm"]');
  I.wait(3);

  //Fechar o spam tab aberto automaticamente
  I.switchToNextTab();
  I.closeCurrentTab();
  I.wait(2);

  //CLicar no endereco do destinatario na tela
  I.click(email2);
  //Visualizar o endereco do Remetente na tela
  I.see(mailbox);
  //Visualizar o endereco do destinatario na tela
  I.see(email2);
  //Visualizar Assunto na tela
  I.see('Hello' + ' ' + Fname);
  //Visualizar a mensagem no do corpo do email na tela
  I.see('CODE' + ' ' + numero);
  I.wait(5);
  I.openNewTab();
  I.wait(1);



//Cadastro no site elo7  


  //Pesquisa Google
  //Acessar pagina Google.com
  I.amOnPage('https://www.google.com');
  I.wait(3);
  //Visualizar o elemento Google na tela
  I.see('Google'); 
  
  pO_SearchPage.search('elo7');
  //Preencher o campo de busca com a palavra 'elo7'
  //I.fillField('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input', 'elo7');
  //Clicar no botao Pesquisar
  //I.click('Pesquisa Google');

  I.wait(2);
  //Visualizar o elemento 'Elo7 | Produtos Fora de Série' na tela
  I.see('Elo7 | Produtos Fora de Série');
  //Clicar no elemento 'Elo7 | Produtos Fora de Série' na tela
  I.click('Elo7 | Produtos Fora de Série');
  I.wait(3);
  //Visualizar o endereco 'https://www.elo7.com.br/' na url
  I.seeInCurrentUrl('https://www.elo7.com.br/');
  //Visualizar o elemento 'Cadastrar' na tela
  I.see('Cadastrar');
  //Clicar no elemento 'Cadastrar' na tela
  I.click('Cadastrar');
  I.wait(3);

  //Preencher Formulario incorretamente
  pO_RegisterPage.sendForm(nome,emailError,emailError,'Pa$$12345');
  //Preencher o campo 'Nome completo' 
  //I.fillField('//*[@id="main-container"]/section/form/label[1]/input', nome); 
  //I.wait(1);
  //Preencher o campo 'Email' sem o "@"
  //I.fillField('//*[@id="main-container"]/section/form/label[2]/input', emailError);
  //I.wait(1);
  //Preencher o campo 'Confirmar Email' sem o "@"
  //I.fillField('//*[@id="main-container"]/section/form/label[3]/input', emailError);
  //I.wait(1);
  //Preencher o campo 'Password' 
  //I.fillField('//*[@id="main-container"]/section/form/label[4]/input', 'Pa$$12345');
  //I.wait(1);
  //Clicar no botao 'Cadastrar' mas não sera processado o submit, pois o endereco de email precisa do "@"
  //I.click('//*[@id="main-container"]/section/form/input[4]');  
  //I.wait(1);
  
  //Visualizar o elemento 'Insira um e-mail válido' na tela
  I.see('Insira um e-mail válido');
  
  //Limpar o campo 'Nome completo'
  I.updateField('//*[@id="main-container"]/section/form/label[1]/input');
  I.wait(1);
  //Limpar o campo Email
  I.updateField('//*[@id="main-container"]/section/form/label[2]/input');
  I.wait(1);
  //Limpar o campo Email 2
  I.updateField('//*[@id="main-container"]/section/form/label[3]/input');
  I.wait(1);
  //Limpar o campo Password
  I.updateField('//*[@id="main-container"]/section/form/label[4]/input');
  I.wait(1);
  
  //Preencher Formulario corretamente
  pO_RegisterPage.sendForm(nome,email,email,'Pa$$12345');
  //Preencher o campo 'Nome completo' 
  //I.fillField('//*[@id="main-container"]/section/form/label[1]/input', nome); 
  //I.wait(1);
  //Preencher o campo 'Email' com o "@"
  //I.fillField('//*[@id="main-container"]/section/form/label[2]/input', email);
  //I.wait(1);
  //Preencher o campo 'Confirmar Email' com o "@"
  //I.fillField('//*[@id="main-container"]/section/form/label[3]/input', email);
  //I.wait(1);
  //Preencher o campo 'Password' 
  //I.fillField('//*[@id="main-container"]/section/form/label[4]/input', 'Pa$$12345');
  //I.wait(1);
  //Clicar no botao 'Cadastrar' 
  //I.click('//*[@id="main-container"]/section/form/input[4]');  

  //Caso o Recaptcha seja apresentado no submit, preecher o campo Senha, Recaptcha e clicar no botão Cadastrar manualmente
  I.wait(50);  

  //Visualizar confirmacao de cadastro, o elemento 'Seja bem-vindo ao Elo7!' na tela
  I.waitForElement('//*[@id="wrapper"]/div[2]/div/p', 35); 
  I.wait(10);
});
