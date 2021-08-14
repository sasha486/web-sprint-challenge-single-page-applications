describe('testing our form inputs', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3002/pizza');
  });
  it('tests name input', function () {
    cy.get('[data-cy=name]').type('tests name out');
  });

  it('tests checkbox input', function () {
    cy.get('[data-cy=checkbox1]').check().should('be.checked');
  });
  it('tests checkbox input', function () {
    cy.get('[data-cy=checkbox2]').check().should('be.checked');
  });
  it('tests checkbox input', function () {
    cy.get('[data-cy=checkbox3]').check().should('be.checked');
  });
  it('tests checkbox input', function () {
    cy.get('[data-cy=checkbox4]').check().should('be.checked');
  });
  it('tests checkbox input', function () {
    cy.get('[data-cy=checkbox5]').check().should('be.checked');
  });
  it('tests checkbox input', function () {
    cy.get('[data-cy=checkbox6]').check().should('be.checked');
  });
  it('test submit', function () {
    cy.get('[data-cy=submit]').submit();
  });
});
