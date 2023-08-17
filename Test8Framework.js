/// <reference types="Cypress" />

{
    before(function(){
        //runs once before all tests in the block



    })
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {


    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.get("input[name='name']:nth-child(2)").type("Bob")
    cy.get("select").select("Female")







})
})

}
