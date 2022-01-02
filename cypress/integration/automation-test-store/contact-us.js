/// <reference types="Cypress" />

const landingPageUrl = "https://automationteststore.com/";
const assert = require("assert");

describe("Test contact us page form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        //prepare
        cy.visit(landingPageUrl);

        // perform
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        // cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        // cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get("a[href$='contact']").click().then((element)=>console.log(element.text())); //here $ means ends with

        cy.get('#ContactUsFrm_first_name').type("first name");

        cy.get('#ContactUsFrm_email').type('demo@demo.com');
        cy.get('#ContactUsFrm_email').should('have.attr', "name", "email");

        // cy.get('#ContactUsFrm_enquiry').type("demo enquiry");
        // cy.get("//textarea[@id='ContactUsFrm_enquiry']")
        cy.get("[id='ContactUsFrm_enquiry']").type("demo enquiry");

        // cy.get('.col-md-6 > .btn').click()
        cy.get("button[title='Submit']").click()

        //predict
        cy.get('.mb40 > :nth-child(3)').should(
            "have.text",
            "Your enquiry has been successfully sent to the store owner!"
        )
        cy.log("las ma huncha")
    });
})
