const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/html",
      overwrite: true,
      html: true,
      json: false
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // hooks se precisar
    }
  }
});
