const landingPageUrl = "http://webdriveruniversity.com";

describe("Handling iframe and modals", ()=>{
    it('should handle iframe dn models', function () {
        cy.visit(landingPageUrl);
        cy.get("#iframe").invoke("removeAttr", "target").click({force: true})
        cy.get("#frame").then(el=>{
            const body = el.contents().find("body")
            cy.wrap(body).as("iframe")
        })

        cy.get("@iframe").find("#button-find-out-more").click()

        cy.get("@iframe").find("#myModal").as("modal")

        cy.get("@modal").should((textBody)=>{
            expect(textBody.text()).to.include("webdriveruniversity.com")
        })

        cy.get("@modal").contains("Close").click()
    });
})
