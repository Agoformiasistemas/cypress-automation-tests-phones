class MainPage {
  getOptionsContainer() {
    return cy.get("div.container");
  }

  getoptionsPageContainer() {
    return cy.get("img.img-responsive");
  }

  getButtons() {
    return cy.get("button.btn.btn-primary");
  }

  getInputButton() {
    return cy.get("button[id='updatingButton']");
  }

  getInputPageBox() {
    return cy.get("input[id='newButtonName']");
  }

  getRemoveButton() {
    return cy.get('button[data-original-title="Remove"]');
  }

  getInputBox() {
    return cy.get("");
  }

  getAddToCartButton() {
    return cy.get('button[id="button-cart"]');
  }
}

module.exports = new MainPage();
