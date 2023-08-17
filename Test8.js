/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('My Second Test Suite', function() 
{
 
it('Frame Test',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded("#courses-iframe") 

cy.iframe().find("a[href*='mentorship']").eq(0).click()

cy.iframe().then($iframe => {
   cy.wrap($iframe).find("h1[class*='pricing-title']").should('have.length', 2);


})
})
})