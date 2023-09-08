const { defineConfig } = require("cypress");
require("dotenv").config();
const {
  NodeModulesPolyfillPlugin,
} = require("@esbuild-plugins/node-modules-polyfill");
const { verifyDownloadTasks } = require("cy-verify-downloads");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const { rmdir } = require("fs");
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        console.log(launchOptions.args);

        if (browser.name === "chrome") {
          launchOptions.args.push("--disable-gpu");
        }

        return launchOptions;
      });
      on("task", verifyDownloadTasks);

      Object.keys(process.env).forEach((envKey) => {
        config.env[envKey] = process.env[envKey];
      });

      const bundler = createBundler({
        plugins: [NodeModulesPolyfillPlugin(), createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      on("task", {
        deleteFolder(folderName) {
          console.log("deleting folder %s", folderName);
          return new Promise((resolve) => {
            rmdir(folderName, { maxRetries: 10, recursive: true }, () => {
              resolve(null);
            });
          });
        },
      });

      on("task", {
        async renameFile({ oldName, newName }) {
          fs.rename(oldName, newName);
          return null;
        },
      });
      console.log(`Running in environment: ${config.env.ENV}`);
      console.log(`Running witg tags: ${config.env.tags}`);

      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature",
    viewportHeight: 960,
    viewportWidth: 1536,
    chromeWebSecurity: false,
    videoUploadOnPasses: false,
    video: false,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    numTestsKeptInMemory: 0,
    defaultCommandTimeout: 8000,
    defaultpageLoadTimeout: 100000,
    experimentalMemoryManagement: true,
    downloadsFolder: "cypress/downloads",
    trashAssetsBeforeRuns: true,
  },
});
