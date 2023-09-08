import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
const storeMainPage = require("../../pages/MainPage");

Given(`a user in the Phone Store home page`, () => {
  cy.visit("http://opencart.abstracta.us/");
});

When(`the phone is removed to the cart`, () => {
  storeMainPage
    .getEmptyTitleOfCart()
    .find("p")
    .should("have.text", "Your shopping cart is empty!");
});

When(`the user enter {string} in the searchbar`, (phoneNameToSearch) => {
  storeMainPage.getInputSearch().click();
  storeMainPage.getInputSearch().type(phoneNameToSearch);
});

When(`click on Search button`, () => {
  storeMainPage.getInputSearch().find("button").click();
});

When(`the user select the first option in the grid View`, () => {
  storeMainPage.getfirstResultGridview().click();
});

When(`click on Add to cart button`, () => {
  storeMainPage.getAddToCartButton().click();
});

When(`the phone is added to the cart`, () => {
  storeMainPage.getLabelTotalCart().should("have.text", " 1 item(s) - $123.20");
});

When(`the user go to the cart`, () => {
  storeMainPage.getLabelTotalCart().click();
  storeMainPage.getButtonsOfPage().eq(0).click();
});

When(`the user click on {string} button`, () => {
  storeMainPage.getRemoveButton().click();
});
