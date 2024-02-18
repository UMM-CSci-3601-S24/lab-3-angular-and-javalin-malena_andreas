import { TodoListPage } from "cypress/support/todo-list.po";

const page = new TodoListPage();

describe('Todo list',() => {

  beforeEach(() => {
    page.navigateTo();
  });

  it('Should have the correct page title', () => {
    page.getPageTitle().should('eq', 'Todos');
  });

  it('Should have the correct title', () => {
    page.getTodoTitle().should('have.text', 'Todos');
  });

  it('Should type something in the owner filter and check that it returned correct elements', () => {
    cy.get('[data-test=todoOwnerInput]').type('Fry');

    page.getTodoCards().each($card => {
      cy.wrap($card).find('.todo-card-owner').should('have.text', 'Fry');
    });

    page.getTodoCards().find('.todo-card-owner').each($owner =>
      expect($owner.text()).to.equal('Fry')
    );

});

});
