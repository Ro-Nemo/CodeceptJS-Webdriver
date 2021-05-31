# CodeceptJS-Webdriver


OS Name: Ubuntu 20.04.2 LTS
Codeceptjs: 3.0.5
Webdriverio: 6.12.1




============ Instalação CodeceptJS ============


Upgrade UBUNTU
sudo apt-get install -f
sudo apt-get update && sudo apt-get dist-upgrade



0) Instalação Console Linux
- sudo apt-get update && sudo apt-get upgrade
- sudo apt-get install gdebi

Install Curl
- sudo apt-get install curl

1) Install NodeJS v 4.2.0 ou higher:
- curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - 
- sudo apt-get install -y nodejs


2) Install Java
- sudo apt-get update
- sudo apt-get install default-jdk

3) - sudo npx create-codeceptjs .
3.1) - sudo npx codeceptjs init (Instalar Webdriver) 

4) Install Webdrivers
- sudo npm install -g selenium-standalone
- sudo selenium-standalone install
- sudo selenium-standalone start      **(Depois Ctrl Z, pra parar servico)**
- sudo npm install -g selenium-webdriver

5) 
- sudo npm install selenium-standalone@latest -g
- sudo selenium-standalone install
- sudo selenium-standalone start      **(Depois Ctrl Z, pra parar servico)**

6) Install faker
- sudo npm install faker
- sudo npm install cpf_cnpj

7) Install MailSlurp
- Create an account at MailSlurp.com (get apikey)
- npm i @codeceptjs/mailslurp-helper --save-dev     **ou inserir --force no final**
- npx codeceptjs def

8) Resetar PC 

============ Inicializar Testes Webdrivers ============

9) Acessar pasta do projeto em um terinal > Executar Serviço Selenium standalone
- selenium-standalone start (Deixar rodando no fundo)

 
10) Acessar pasta do projeto em outro terminal > Executar Teste codecept JS
- npm run codeceptjs
ou
- npm run codeceptjs Proto_test.js

Credits: Ro-Nemo
