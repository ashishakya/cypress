/// <reference types="Cypress" />

const landingPageUrl = "https://automationteststore.com/";
const assert = require("assert");

describe("Inspect automation Test Store item using chain of commands", () => {
    it("Click on the first item using item header", () => {
        //prepare
        cy.visit(landingPageUrl);

        // perform
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()


        //predict

    });

    it.only("Click on the first item using item text", () => {
        //prepare
        cy.visit(landingPageUrl);

        // perform
        cy.get('.prdocutname').contains("Skinsheen Bronzer Stick")
            .click()
            .then((itemHeaderText)=>console.log(itemHeaderText.text()));

        //predict

    });

    it("Click on the first item using item using index", () => {
        //prepare
        cy.visit(landingPageUrl);

        // perform
        cy.get('.fixed_wrapper').find(".prdocutname").eq(0).click();

        //predict

    });
})
