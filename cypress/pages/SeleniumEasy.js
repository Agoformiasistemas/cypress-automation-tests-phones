class SeleniumEasy {
  getDemoButton() {
    return cy.get("a[id='btn_basic_example']");
  }

  getItemOptionsInAdvanced() {
    return cy.get("a.list-group-item");
  }

  getAdvancedDemoButton() {
    return cy.get("#btn_advanced_example");
  }

  getBasicNextButton() {
    return cy.get("a[id='btn_inter_example']");
  }

  getExampleTitle() {
    return cy.get("h3.head.text-center");
  }
}

module.exports = new SeleniumEasy();
