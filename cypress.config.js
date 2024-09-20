const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
    pageLoadTimeout: 20000,
    retries:1,
    env: {
      commandDelay: 500,
      
    }
  },
});
