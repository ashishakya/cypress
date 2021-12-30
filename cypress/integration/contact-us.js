/// <reference types="Cypress" />

const landingPageUrl = "http://webdriveruniversity.com/Contact-Us/contactus.html";
const assert = require("assert");

describe("Test contact us page form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit(landingPageUrl);
        cy.get('[name="first_name"]').type("first name");
        cy.get('[name="last_name"]').type("last name");
        cy.get('[name="email"]').type("testemail@email.com");
        cy.get('textarea.feedback-input').type("this is my demo feedback");
        cy.get('[type="submit"]').click()
        // console.log(cy.get('#contact_reply').find("h1").text());
        // const successMessage = "Thank You for your Message!"
        // assert.strictEqual(cy.get('h1'), successMessage);
    });

    it("Should not be able to submit a successful submission via contact us form as all field are required", () => {
        cy.visit(landingPageUrl);
        cy.get('[type="submit"]').click()
    });
})
