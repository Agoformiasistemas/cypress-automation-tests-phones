class MainPage {
  getInputSearch() {
    return cy.get('div[id="search"]');
  }

  getfirstResultGridview() {
    return cy.get("img.img-responsive");
  }

  getEmptyTitleOfCart() {
    return cy.get('div[id="content"]');
  }

  getButtonsOfPage() {
    return cy.get("i.fa.fa-shopping-cart");
  }

  getRemoveButton() {
    return cy.get('button[data-original-title="Remove"]');
  }

  getLabelTotalCart() {
    return cy.get('span[id="cart-total"]');
  }

  getAddToCartButton() {
    return cy.get('button[id="button-cart"]');
  }

  getInputSearch() {
    return cy.get('div[id="search"]');
  }
}

module.exports = new MainPage();
