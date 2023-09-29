const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 40000,
  pageLoadTimeout:40000,
  e2e: {
        setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
