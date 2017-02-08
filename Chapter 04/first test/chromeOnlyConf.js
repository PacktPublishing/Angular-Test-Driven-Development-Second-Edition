// An example configuration file.
exports.config = {
  // Do not start a Selenium Standalone sever - only run this using chrome.
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver.exe',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080/',
  
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['confirmConfigTest.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
