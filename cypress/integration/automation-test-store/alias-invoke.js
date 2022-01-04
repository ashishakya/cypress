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

    it("Count the number of items in homepage", ()=>{
        cy.visit(landingPageUrl);
        cy.get(".thumbnails .thumbnail").as("itemsElementList")

        cy.get("@itemsElementList").its("length").should("eq", 16)

        cy.get(".thumbnails .productcart").each((el)=>{
            cy.wrap(el).should("have.attr", "title", "Add to Cart")
        });
    })

    it("Validating product count and label", ()=>{
        cy.visit(landingPageUrl);
        cy.get(".thumbnails .thumbnail").as("itemsElementList")

        cy.get("@itemsElementList").its("length").should("eq", 16)

        cy.get("@itemsElementList").find(".productcart").each((el)=>{
            cy.wrap(el).should("have.attr", "title", "Add to Cart")
        });
    })

    it.only("Calculate total of normal and sale product", ()=>{
        cy.visit(landingPageUrl);
        cy.get(".thumbnails .thumbnail").as("itemsElementList")


        // count of non sale item
        // cy.get("@itemsElementList").find(".price .oneprice").each((el)=>{
        //     cy.log(el.text())
        // })

        cy.get("@itemsElementList").find(".price .oneprice").invoke('text').as("itemPriceList")
        cy.get("@itemsElementList").find(".price .pricenew").invoke('text').as("saleItemPriceList")

        let totalPrice = 0;

        cy.get("@itemPriceList").then((itemPrice)=>{
            let normalItemTotal = 0;
            const itemPrices = itemPrice.split("$")
            itemPrices.forEach(itemPrice=>{
                normalItemTotal+=Number(itemPrice)
            })
            totalPrice+=normalItemTotal
            cy.log("sale item total price-->>", normalItemTotal)
        })

        cy.get("@saleItemPriceList").then((itemPrice)=>{
            let saleItemTotal = 0;
            const itemPrices = itemPrice.split("$")
            itemPrices.forEach(itemPrice=>{
                saleItemTotal+=Number(itemPrice)
            })
            totalPrice+=saleItemTotal

            cy.log("sale item total price-->>", saleItemTotal)
        }).then(()=>{
            cy.log('total price->>', totalPrice)
            expect(totalPrice).to.eq(648.5)
        })
    })
})
