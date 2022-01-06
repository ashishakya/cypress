const landingPageUrl = "http://webdriveruniversity.com";

describe("Verify checkbox and radio button", ()=>{
    it('check and validation checkbox ', function () {
        cy.visit(landingPageUrl);

        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force: true})

        cy.get('#checkboxes > :nth-child(1) > input').as("firstOption")
        cy.get("@firstOption").check().should("be.checked")

        cy.get('#checkboxes > :nth-child(3) > input').as("thirdOption")
        cy.get("@thirdOption").uncheck().should("not.be.checked")
    });

    it('uncheck and validation checkbox ', function () {
        cy.visit(landingPageUrl);

        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force: true})

        cy.get('#checkboxes > :nth-child(3) > input').as("thirdOption")
        cy.get("@thirdOption").uncheck().should("not.be.checked")
    });

    it('check multiple options and validate them', function () {
        cy.visit(landingPageUrl);

        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force: true})

        cy.get("#checkboxes input[type='checkbox']").check(["option-1", "option-2"]).should("be.checked")
    });

    it('check all options and validate them', function () {
        cy.visit(landingPageUrl);

        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force: true})

        cy.get("#checkboxes input[type='checkbox']").check()
    });
})
