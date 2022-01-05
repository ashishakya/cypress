/// <reference types="Cypress" />

const landingPageUrl = "http://webdriveruniversity.com";

describe("Handle js alert", () => {
    it("Confirm js alert contains the correct text", () => {
        //prepare
        cy.visit(landingPageUrl);
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({force: true})
        cy.get("#button1").click()
        cy.on("window:alert", (alertMessage) => {
            expect(alertMessage).to.equal("I am an alert box!")
        })
    });

    it("Validate js Confirm actions on confirm modal", () => {
        cy.visit(landingPageUrl);
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({force: true})
        cy.get("#button4").click()
        cy.on("window:confirm", () => {
            return true
        })
        cy.get("#confirm-alert-text").contains("You pressed OK!")
    })

    it("Validate js cancel actions on confirm modal", () => {
        cy.visit(landingPageUrl);
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({force: true})
        cy.get("#button4").click()
        cy.on("window:confirm", () => {
            return false
        })
        cy.get("#confirm-alert-text").contains("You pressed Cancel!")
    })

    it.only("Validate js confirm alert box using a stub", () => {
        cy.visit(landingPageUrl);
        cy.get("#popup-alerts").invoke("removeAttr", "target").click({force: true})
        const stubs = cy.stub();
        cy.on("window:confirm", stubs)
        cy.get("#button4").click().then(() => {
            expect(stubs.getCall(0)).to.be.calledWith("Press a button!")
        })
            .then(() => true)
            .then(() =>cy.get("#confirm-alert-text").contains("You pressed OK!"))
    })
})
