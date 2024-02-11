
export class TodoByIDPage {
  navigateToByID(id: string) {
    return cy.visit('/todos/' + id);
  }

  getUrl() {
    return cy.url();
  }


  /**
   * Gets the page title, which appears in the page tab
   *
   * @return the title of the component page
   */
  getPageTitle() {
    return cy.title();
  }
}
