const landingPageUrl = "http://webdriveruniversity.com";

describe("Verify radio button", ()=>{
    it('check and validation checkbox ', function () {
        cy.visit(landingPageUrl);

        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force: true})

        cy.get("#radio-buttons [type='radio']").first().check()
        cy.get("#radio-buttons [type='radio']").eq(2).check()
    });

    it.only('verify selected radio option ', function () {
        cy.visit(landingPageUrl);

        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force: true})

        cy.get('[value="lettuce"]').should("not.be.checked")
        cy.get('[value="pumpkin"]').should("be.checked")
        cy.get('[value="cabbage"]').should("be.disabled")
    });
})
