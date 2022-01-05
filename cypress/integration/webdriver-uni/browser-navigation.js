/// <reference types="Cypress" />

// const landingPageUrl = "http://webdriveruniversity.com/Contact-Us/contactus.html";
const landingPageUrl = "http://webdriveruniversity.com";
const assert = require("assert");

describe("Validate Browser navigation", () => {
    it("Confirm links redirect to correct pages", () => {
        //prepare
        cy.visit(landingPageUrl);
        cy.get("#contact-us").invoke("removeAttr", "target").click({force:true})
        cy.url().should("include", "contactus.html")
        cy.go("back")
        cy.reload() //reload withour using cache
        cy.go("forward")
        cy.url().should("include", "contactus.html")
        cy.go("back")
        cy.get("#login-portal").invoke("removeAttr", "target").click()
        cy.url().should("include", "Login-Portal")
        cy.go("back")
    });

})
