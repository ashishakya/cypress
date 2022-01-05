/// <reference types="Cypress" />

const landingPageUrl = "http://webdriveruniversity.com";

describe("Handle js alert", () => {
    it("Confirm js alert contains the correct text", () => {
        //prepare
        cy.visit(landingPageUrl);
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true})
        cy.get("#button1").click()
        cy.on("window:alert", (alertMessage)=>{
            expect(alertMessage).to.equal("I am an alert box!")
        })
    });

    it("Validate js Confirm actions on confirm modal", ()=>{
        cy.visit(landingPageUrl);
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true})
        cy.get("#button4").click()
        cy.on("window:confirm", ()=>{
           return true
        })
        cy.get("#confirm-alert-text").contains("You pressed OK!")
    })

    it("Validate js cancel actions on confirm modal", ()=>{
        cy.visit(landingPageUrl);
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({force:true})
        cy.get("#button4").click()
        cy.on("window:confirm", ()=>{
            return false
        })
        cy.get("#confirm-alert-text").contains("You pressed Cancel!")
    })
})
