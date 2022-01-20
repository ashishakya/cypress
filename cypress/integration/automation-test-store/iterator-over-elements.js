/// <reference types="Cypress" />

const landingPageUrl = "https://automationteststore.com/";
const assert = require("assert");

describe("Iterate over elements", () => {
    it("Log info of all hair care products", ()=>{
        cy.visit(landingPageUrl);
        const menuTitle = "Hair Care";
        cy.get("a[href*='product/category&path='").contains(menuTitle).click()
        cy.get(".fixed_wrapper .prdocutname").each((el)=>{
            cy.log(el.text());
        })

    })

    it("Add specific product to basket", ()=>{
        cy.visit(landingPageUrl);
        const menuTitle = "Hair Care";
        cy.get("a[href*='product/category&path='").contains(menuTitle).click()

        // whoel logic is replaced by custom command
        // cy.get(".fixed_wrapper .prdocutname").each((el)=>{
        //     if(el.text().includes("Seaweed Conditioner")){
        //         cy.wrap(el).click() // el is an jquery instance hence wrap helps us to wrap it as a cypres instance
        //     }
        // })

        cy.selectProduct("Seaweed Conditioner");

    })
    it("Add another product to basket", ()=>{
        cy.visit(landingPageUrl);
        const menuTitle = "Hair Care";
        cy.get("a[href*='product/category&path='").contains(menuTitle).click()

        // whoel logic is replaced by custom command
        // cy.get(".fixed_wrapper .prdocutname").each((el)=>{
        //     if(el.text().includes("Seaweed Conditioner")){
        //         cy.wrap(el).click() // el is an jquery instance hence wrap helps us to wrap it as a cypres instance
        //     }
        // })

        cy.selectProduct("Absolue Eye Precious Cells");
    })
})
