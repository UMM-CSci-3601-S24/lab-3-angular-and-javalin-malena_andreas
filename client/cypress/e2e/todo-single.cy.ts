import { TodoByIDPage } from "cypress/support/todo-by-id.po";

const page = new TodoByIDPage();


  describe('Display a single todo by ID', () => {

    beforeEach(() => {
      page.navigateToByID('58895985a22c04e761776d54');
    });
    /*
    {
    "_id": "58895985a22c04e761776d54",
    "owner": "Blanche",
    "status": false,
    "body": "In sunt ex non tempor cillum commodo amet incididunt anim qui commodo quis. Cillum non labore ex sint esse.",
    "category": "software design"
  },*/

    it('Should have the correct page title', () => {
      page.getPageTitle().should('eq', 'Todo');
    });

    it('Should have the correct owner', () => {
      page.getTodoOwner().should('have.text', 'Blanche');
    });

    it('Should display the correct for another todo', () => {
      page.navigateToByID("58895985c1849992336c219b");
      page.getTodoOwner().should('have.text', 'Fry');
    })
});
