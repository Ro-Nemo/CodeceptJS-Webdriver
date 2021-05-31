const { setHeadlessWhen } = require('@codeceptjs/configure');


// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://mailnesia.com/',
      browser: 'chrome',
      windowSize: 'maximize',
      //desiredCapabilities: {
        //chromeOptions: {
          //args: ["--headless", "--disable-gpu", "--no-sandbox"]
        //}
      //}
    },
    Neo: {
    require: './neo_helper.js',
    },
    MailSlurp: {
    require: '@codeceptjs/mailslurp-helper',
    apiKey: 'acc5727f0e14117ba308778768c74fd0175d49e56e173776723c321b1684eac8'
    }
  },
  include: {
    I: './steps_file.js',
    pO_SearchPage: './pages/PO_Search.js',
    pO_RegisterPage: './pages/PO_Register.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'nyx',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
