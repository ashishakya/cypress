const landingPageUrl = "http://webdriveruniversity.com";

describe("Verify radio button", ()=>{
    before(()=>{
        cy.visit(landingPageUrl);
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force: true})
    })

    it('check and validation checkbox ', function () {
        cy.get("#radio-buttons [type='radio']").first().check()
        cy.get("#radio-buttons [type='radio']").eq(2).check()
    });

    it('verify selected radio option ', function () {
        cy.get('[value="lettuce"]').should("not.be.checked")
        cy.get('[value="pumpkin"]').should("be.checked")
        cy.get('[value="cabbage"]').should("be.disabled")
    });
})
