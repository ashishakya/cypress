/// <reference types="Cypress" />

const landingPageUrl = "https://automationteststore.com/";
const assert = require("assert");

describe("Verify add multiple items to basket", () => {
    before( ()=>{
        cy.fixture("products.json").then((data)=>{
            globalThis.data = data
        })
    })
    it("Add specific items to basket", ()=>{
        cy.visit(landingPageUrl);
        const menuTitle = "Hair Care";
        cy.get("a[href*='product/category&path='").contains(menuTitle).click()
        globalThis.data.productNames.forEach(product=>cy.addProductToBasket(product))
    })
})
