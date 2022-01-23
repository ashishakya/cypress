/// <reference types="Cypress" />

const landingPageUrl = "https://automationteststore.com/";
const assert = require("assert");
const Homepage_PO = require("../../support/pageObjects/automationTestStore/homePage_PO");
const HairCare_Po = require("../../support/pageObjects/automationTestStore/hairCare_Po");

describe("Verify add multiple items to basket", () => {
    const homePagePO = new Homepage_PO()
    const hairCarePo = new HairCare_Po()

    before( ()=>{
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.fixture("products.json").then((data)=>{
            globalThis.data = data
        })
    })
    it("Add specific items to basket", ()=>{

        // cy.visit(landingPageUrl);
        // const menuTitle = "Hair Care";
        // cy.get("a[href*='product/category&path='").contains(menuTitle).click()
        // globalThis.data.productNames.forEach(product=>cy.addProductToBasket(product))

        homePagePO.visitHomePage()
        homePagePO.visitHairCareMenu()
        hairCarePo.addHairCareProductsToBasket()
    })
})
