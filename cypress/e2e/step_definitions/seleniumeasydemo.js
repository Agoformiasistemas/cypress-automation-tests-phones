import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const seleniumEasyPage = require("../../pages/SeleniumEasy");

Given(`a user in the Selenium Easy Demo home page`, () => {
  cy.visit("https://demo.seleniumeasy.com/");
});

Then("the user see the first page with the next table:", (dataTable) => {
  const expectedData = dataTable.hashes();

  expectedData.forEach((expectedRow, rowIndex) => {
    cy.get("table tbody tr:visible")
      .eq(rowIndex)
      .find("td")
      .each(($cell, columnIndex) => {
        const columnName = Object.keys(expectedRow)[columnIndex];
        const expectedText = expectedRow[columnName];
        cy.get($cell).should("contain.text", expectedText);
      });
  });
});

When(`the user click on {string} advanced button`, (buttonName) => {
  seleniumEasyPage
    .getAdvancedDemoButton()
    .should("have.text", buttonName)
    .click();
});

When(`click on {string} option in the advance options`, (optionName) => {
  seleniumEasyPage.getItemOptionsInAdvanced().contains(optionName).click();
});

When(`the user click on {string} button`, (buttonName) => {
  if (buttonName === " Start Practising ") {
    seleniumEasyPage.getDemoButton().should("have.text", buttonName).click();
  } else if (buttonName === "Proceed Next") {
    seleniumEasyPage
      .getBasicNextButton()
      .should("have.text", buttonName)
      .click();
  }
});

When(`the user see the examples page with the title {string}`, (pageTitle) => {
  seleniumEasyPage.getExampleTitle().eq(1).should("have.text", pageTitle);
});
