const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6azsrs",
  baseUrl: "http://automationpractice.com/index.php?controller=authentication&back=my-account",
  env: {
    activitiesUrl: "http://fakerestapi.azurewebsites.net/api/v1/Activities",
    allure: true,
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 30000,

  reporterOptions: {
    reportDir: "cypress/report/mochawesome-report",
    overwrite: false,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
    video: false,
  },

  e2e: {
    specPattern: '**/*.feature'
  }
});
