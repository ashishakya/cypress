/// <reference types="Cypress" />
const landingPageUrl = "http://webdriveruniversity.com/Contact-Us/contactus.html";

describe("Selector examples",()=>{
        it("Examples of selectors via webdriver uni contact Us Page", ()=>{
            cy.visit(landingPageUrl);

            //by tag name
            cy.get("input")

            //by attribute name and value
            cy.get("input[name='first_name']")

            // by id
            cy.get("#contact_form")

            //by class
            cy.get(".feedback-input")

            // by multiple classes
            cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

            // by two different attribute
            cy.get("[name='email'][placeholder='Email Address']")

            // by xpath
            cy.xpath("//input[@name='first_name']")
        })
});
