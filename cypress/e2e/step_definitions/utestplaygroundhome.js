import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
const storeMainPage = require("../../pages/MainPage");

Given(`a user in the uitesting Playground home page`, () => {
  cy.visit("https://uitestingplayground.com/home");
});

When(`the phone is removed to the cart`, () => {
  storeMainPage
    .getEmptyTitleOfCart()
    .find("p")
    .should("have.text", "Your shopping cart is empty!");
});

When(
  `the user enter in {string} option in the sections view`,
  (optionSelected) => {
    storeMainPage
      .getOptionsContainer()
      .find("a")
      .contains(optionSelected)
      .click();
  }
);

When(`the title is {string}`, (title) => {
  storeMainPage.getOptionsContainer().find("h3").should("have.text", title);
});

When(`the description is {string}`, (description) => {
  storeMainPage
    .getOptionsContainer()
    .find("p")
    .should("have.text", description);
});

When(`click {string} button`, (buttonName) => {
  storeMainPage.getButtons().contains(buttonName).click();
});

When(`the button have the label {string}`, (buttonString) => {
  storeMainPage.getButtons().should("have.text", buttonString);
});

When(`the user enter in the input field {string}`, (stringInput) => {
  storeMainPage.getInputPageBox().type(stringInput);
});

When(`click on the input text page button`, () => {
  storeMainPage.getInputButton().click();
});

When(`the input button shows the label {string}`, (labelButton) => {
  storeMainPage.getInputButton().should("have.text", labelButton);
});
