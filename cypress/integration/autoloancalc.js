describe('Open auto loan calculator', function() {
  it('Verify that the web app loads with default values', function () {
    cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')

    cy.get('[data-cy=amount]')
      .should('have.value','15,000')

    cy.get('[data-ri-filtername=term]').contains('60 months')
    
    cy.get('[data-ri-filtername=new-used]').contains('Used')

    cy.get('[data-ri-filtername=interest-rate]')
      .should('have.value', '3')
  })

  it('Verify that reloading the web app resets the values to the default values after changing them.', function () {

// dont think I need this for automated testing.  

})

  it('Verify that the principal field takes a number between 1000 and 100000', function () {

    cy.get('[data-cy=amount]')
      .click()
      .type('20000')
      .type('{enter}')
      .should('have.value', '20,000')

  })

  it('Verify that the principal field rejects any other input', function () {

    cy.get('[data-cy=amount]')
      .clear()
      .type('999')
      .should('have.css', 'background-color')
      .and('be.colored', '#cf4931')
// html indicates there is an error-message as well.

    cy.get('[data-cy=amount]')
      .clear()
      .type('100001')
      .should('have.color', '#cf4931')

  })

  it('Verify that the term can be selected', function () {

    cy.get('[data-ri-filtername=term]')
// can't figure out how to replicate user experience. should click to show list then select one.

  })

  it('Verify that the type of loan is selectable.', function () {

    cy.get('[data-ri-filtername=new-used')
// same issues as with term.
  })

  it('Verify that the interest takes decimal number between 0.0 and 99.0.', function () {

    cy.get('[data-ri-filtername=interest-rate')
      .click()
      .type('5.1')
      .type('{enter}')
      .should('have.value', '5.1')

  })

  it('Verify that the interest field rejects all other values', function () {

    cy.get('[data-ri-filtername=interest-rate')
      .clear()
      .click()
      .type('0.0')
      .type('{enter}')
      .should('have.value', '5.1')
// still can't figure out how to check font color or get "error-message"

    cy.get('[data-ri-filtername=interest-rate')
      .clear()
      .click()
      .type('99.0')
      .type('{enter}')
      .should('have.value', '5.1')
  })

  it('Verify "Find rate box" displays text', function () {

   cy.get('[data-ri-filtername=available-rates]')
// can't figure out how to show the "tool tip"

  })

  it('Verify the help for principal displays text', function () {

    cy.get('#Howmuchareyoulookingtoborrow\?TT').contains('i')
      .click()

// 
// The amount you need to borrow to purchase your car. This could include a down payment and any estimated fees from your car purchase.
  })

  it('Verify the help for term displays text', function () {

    cy.get('#Forhowlong\?TT').contains(i)
      .click()

  })

  it('Verify any change to principal, term, type, rate updates the outputs', function () {
    cy.get('.numeral')
    cy.get('.\+border-bottom > :nth-child(2)')
    cy.get('.calculator__results-section > :nth-child(1) > .\+mg-bottom-sm > :nth-child(2)')
  })

  it('Verify the algorithm to calculate outputs is correct', function () {

    

  })
})

