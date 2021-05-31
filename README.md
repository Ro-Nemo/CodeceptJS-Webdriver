# CodeceptJS-Webdriver
OS Name: Ubuntu 20.04.2 LTS
Codeceptjs: 3.0.5
Webdriverio: 6.12.1


============ Install CodeceptJS ============

1) Upgrade UBUNTU
sudo apt-get install -f
sudo apt-get update && sudo apt-get dist-upgrade

2) Install Console
- sudo apt-get update && sudo apt-get upgrade
- sudo apt-get install gdebi

3) Install Curl
- sudo apt-get install curl

4) Install NodeJS v 4.2.0 ou higher:
- curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash - 
- sudo apt-get install -y nodejs

5) Install Java
- sudo apt-get update
- sudo apt-get install default-jdk

6) Install CodeceptJS 
- sudo npx create-codeceptjs 
- sudo npx codeceptjs init (choose Webdriver) 

7) Install Selenium Server 
- sudo npm install -g selenium-standalone
- sudo selenium-standalone install
- sudo selenium-standalone start      #(then press Ctrl Z to stop service)#
- sudo npm install -g selenium-webdriver

8) Install faker
- sudo npm install faker
- sudo npm install cpf_cnpj

9) Install MailSlurp
- Create an account at MailSlurp.com (get apikey)
- npm i @codeceptjs/mailslurp-helper --save-dev     #(if error, insert --force at the end of command)#
- npx codeceptjs def

10) Restart Computer

============ Start CodeceptJS test ============

1) Access project folder in terminal > Execute Selenium standalone Service
- selenium-standalone start 

2) Access project folder in another terminal > Execute test in CodeceptJS
- npm run codeceptjs
or
- npm run codeceptjs Proto_test.js


Credits: Ro-Nemo
