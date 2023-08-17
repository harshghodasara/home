/// <reference types="Cypress" />
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 //CheckBox using Single and Array in arguments
cy.visit("https://rahulshettyacademy.com/AutomationPractice")
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
cy.get('input[type="checkbox"]').check(['option2','option3'])

//Static DropDown
cy.get('select').select('option2').should('have.value','option2')

//Dynamic DropDown
cy.get('#autocomplete').type('ind')

cy.get('.ui-menu-item div').each(($el, index, $list) => {

    if($el.text()=='India')
    {
        $el.click()
    }

})
cy.get('#autocomplete').should('have.value','India')

// Visible and Invisble 
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

//Radio Button
cy.get('[value="radio2"]').check().should('be.checked')
})
})