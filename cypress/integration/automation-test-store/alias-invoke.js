/// <reference types="Cypress" />

const landingPageUrl = "https://automationteststore.com/";
const assert = require("assert");

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit(landingPageUrl);
        const menuTitle = "Hair Care";
        cy.get("a[href*='product/category&path='").contains(menuTitle).click()
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as("productName")

        cy.get("@productName").should("include", "Seaweed Conditioner");
        cy.get("@productName").its("length").should("be.gt", 5);

    })

    it.only("Count the number of items in homepage", ()=>{
        cy.visit(landingPageUrl);
        cy.get(".thumbnails .thumbnail").as("itemsElementList")

        cy.get("@itemsElementList").its("length").should("eq", 16)

        cy.get(".thumbnails .productcart").each((el)=>{
            cy.wrap(el).should("have.attr", "title", "Add to Cart")
        });
    })

    it.only("Validating product count and label", ()=>{
        cy.visit(landingPageUrl);
        cy.get(".thumbnails .thumbnail").as("itemsElementList")

        cy.get("@itemsElementList").its("length").should("eq", 16)

        cy.get("@itemsElementList").find(".productcart").each((el)=>{
            cy.wrap(el).should("have.attr", "title", "Add to Cart")
        });
    })
})
