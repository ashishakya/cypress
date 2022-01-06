const landingPageUrl = "http://webdriveruniversity.com";

describe("Verify drop down menus", ()=>{
    it('select specific values via dropdown list', function () {
        cy.visit(landingPageUrl);

        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({force: true})

        cy.get("#dropdowm-menu-2").select("maven")
        cy.get("#dropdowm-menu-2").select("TestNG").should("have.value", "testng")
    });
    })
