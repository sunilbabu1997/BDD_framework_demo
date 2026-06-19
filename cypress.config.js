const { defineConfig } = require('cypress');
const { rmdir } = require('fs');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    watchForFileChanges: false,
    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'cypress/reports/junit-[hash].xml',
    },
    setupNodeEvents(on, config) {
      on('task', {
        deleteDownloads(folderPath) {
          return new Promise((resolve, reject) => {
            rmdir(folderPath, { recursive: true }, (err) => {
              if (err) reject(err);
              else resolve(null);
            });
          });
        },
      });
    },
  },
});
