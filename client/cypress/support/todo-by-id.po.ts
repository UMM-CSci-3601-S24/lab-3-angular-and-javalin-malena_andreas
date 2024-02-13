
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
  /**
   * Gets the owner of the todo, which appears on the page
   *
   * @return the owner of the todo
   */
  getTodoOwner() {
    return cy.get('.todo-list-owner');
  }

}
