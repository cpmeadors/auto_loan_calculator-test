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

  it('Verify that the principal field takes a number between 1000 and 100000', function () {

    //valid value
    cy.get('[data-cy=amount]')
      .click()
      .type('20000')
      .type('{enter}')
      .should('have.value', '20,000')

  })

  it('Verify that the principal field rejects any other input', function () {

    //lower invalid boundary
    cy.get('[data-cy=amount]')
      .clear()
      .type('999')
    cy.get('[filter-title=amount')
      .should('have.class', '--has-error')
    
    //upper invalid boundary  
    cy.get('[data-cy=amount]')
      .clear()
      .type('100001')
    cy.get('[filter-title=amount')
      .should('have.class', '--has-error')

  })

  it('Verify the help for principal displays text', function () {

    cy.get('#Howmuchareyoulookingtoborrow\\?TT')
      .click()

  })

  it('Verify that the term can be selected', function () {

  cy.get('[data-ri-filtername=term').within(() => {
    cy.get('p.dropdown__selected')
    .click()
    })
  cy.get('.dropdown__list-container').contains('36 months')
  .click()
  })

  it('Verify the help for term displays text', function () {

    cy.get('#Forhowlong\\?TT')
      .click()

  })

  it('Verify that the type of loan is selectable.', function () {

  cy.get('[data-ri-filtername=new-used').within(() => {
    cy.get('p.dropdown__selected')
    .click()
    })
  cy.get('.dropdown__list-container').contains('New')
  .click()
  })

  it('Verify that the interest takes decimal number between 0.0 and 99.0.', function () {

    // valid value
    cy.get('[data-ri-filtername=interest-rate')
      .clear()
      .click()
      .type('5.1')
      .type('{enter}')
      .should('have.value', '5.1')

  })

  it('Verify that the interest field rejects all other values', function () {

    //invalid lower boundary
    cy.get('[data-ri-filtername=interest-rate')
      .clear()
      .click()
      .type('0.0')
      .type('{enter}')
    cy.contains('Invalid rate')

    //invalid upper boundary
    cy.get('[data-ri-filtername=interest-rate')
      .clear()
      .click()
      .type('99.0')
      .type('{enter}')
    cy.contains('Invalid rate')
  })

  it('Verify "Find rate box" displays text', function () {

   cy.get('[data-ri-filtername=available-rates]')
     .click()
   cy.get('[data-ri-filtername=available-rates] p')
     .should('have.class', '--is-active')
  })

  
  it('Verify any change to principal, term, type, rate updates the outputs', function () {
    
    //verify montly payment
    cy.get('p.numeral')
      .should('have.text', '$600')

    //verify total paid principal
    cy.contains('Total Principal Paid').next()
      .should('have.text', '$20,000')

    //verify total paid interest
    cy.contains('Total Interest Paid').next()
      .should('have.text', '$1,611')
  })

  it('Verify the algorithm to calculate outputs is correct', function () {

  
  })
})

