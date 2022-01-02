/// <reference types="Cypress" />

const landingPageUrl = "https://automationteststore.com/";
const assert = require("assert");

describe("Verifying variables, cypress command and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        //prepare
        cy.visit(landingPageUrl);

        let menu1 = "Makeup";
        const makeUpLinks = cy.get("a[href*='product/category&path='").contains(menu1).click()
        cy.get(".heading1 > .maintext").should("have.text", menu1);

        let menu2 = "Skincare";
        const skinCareLinks = cy.get("a[href*='product/category&path='").contains(menu2).click()

        // way  1
        cy.get(".heading1 > .maintext").should("have.text", menu2);

        // way  2
        cy.get(".heading1 > .maintext").then((headerElement)=>{
            const headerText = headerElement.text()
            expect(headerText).is.eq(menu2)
        });

    });


    it.only("Validate properties of the contact us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        // uses cypress commands and chaining
        cy.contains("#ContactUsFrm", "Contact Us Form")
            .find("#field_11")
            .should("contain", "First name:")


        // jquery approach
        cy.contains("#ContactUsFrm", "Contact Us Form").then((element)=>{
            const firstNameText = element.find("#field_11").text();
            expect(firstNameText).contain("First name:");
        })


        // embedded commands: use of closure
    });
})
