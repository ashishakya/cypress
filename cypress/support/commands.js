// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("selectProduct", productName=>{
    cy.get(".fixed_wrapper .prdocutname").each((el)=>{
        if(el.text().includes(productName)){
            cy.wrap(el).click() // el is an jquery instance hence wrap helps us to wrap it as a cypres instance
        }
    })
})

Cypress.Commands.add("addProductToBasket", productName=>{
    cy.get(".fixed_wrapper .prdocutname").each((el, index)=>{
        if(el.text() === productName){
            cy.get(".productcart").eq(index).click();
            // todo work on it. It is not implemented. Vno:171
        }
    })
})

Cypress.Commands.add("webDriverUni_contactForm_submission", (firstName, lastName, email, feedback)=>{
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(feedback);

})
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
