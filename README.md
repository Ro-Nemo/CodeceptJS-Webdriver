# CodeceptJS-Webdriver
OS Name: Ubuntu 20.04.2 LTS
Codeceptjs: 3.0.5
Webdriverio: 6.12.1


============ Install CodeceptJS ============

1) Upgrade UBUNTU
- sudo apt-get install -f
- sudo apt-get update && sudo apt-get dist-upgrade

2) Install Console
- sudo apt-get update && sudo apt-get upgrade
- sudo apt-get install gdebi

3) Install Curl
- sudo apt-get install curl

4) Install NodeJS 
- curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
- sudo apt-get install -y nodejs

5) Install Java
- sudo apt-get update
- sudo apt-get install default-jdk

6) Install CodeceptJS 
- sudo apt install npm
- npx create-codeceptjs 
- npx codeceptjs init #(choose Webdriver)# 

7) Install Selenium Server 
- sudo npm install -g selenium-standalone
- sudo selenium-standalone install
- sudo selenium-standalone start      #(then press Ctrl Z to stop service)#
- sudo npm install -g selenium-webdriver

8) Update WebdriverIO v5 to v6
- sudo npm install jscodeshift @wdio/codemod
- npm i --save-dev @wdio/allure-reporter@6 @wdio/cli@6 @wdio/cucumber-framework@6 @wdio/local-runner@6 @wdio/spec-reporter@6 @wdio/sync@6 wdio-chromedriver-service@6 webdriverio@6

9) Install faker
- sudo npm install faker
- sudo npm install cpf_cnpj

10) Install MailSlurp
- Create an account at MailSlurp.com (get apikey)
- npm i @codeceptjs/mailslurp-helper --save-dev     #(if error, insert --force at the end of command)#
- npx codeceptjs def


11) Restart Computer

============ Start CodeceptJS test ============

1) Access project folder in terminal > Execute Selenium standalone Service
- selenium-standalone start 

2) Access project folder in another terminal > Execute test in CodeceptJS
- npm run codeceptjs
or
- npm run codeceptjs Proto_test.js


Credits: Ro-Nemo
