const landingPageUrl = "http://webdriveruniversity.com";

describe("Verify state of autocomplete", ()=>{
    it('Select specific product via auto complete', function () {
        cy.visit(landingPageUrl);

        cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click({force: true})
        cy.get('#myInput').type("g")
        cy.get("#myInputautocomplete-list input").as("items")

        cy.get("@items").each((item, index)=>{
            const productToSelect = "Garlic";
            if(item.attr("value")===productToSelect){
                item.click();
                cy.get('#submit-button').click()
                cy.log(cy.url());
                cy.url().should("include", productToSelect)
            }
        }).then(()=>{
            cy.get('#myInput').type("g")

            cy.get("@items").each((item, index)=>{
                const newProductToSelect = "Grapes";
                if(item.attr("value")===newProductToSelect){
                    item.click();
                    cy.get('#submit-button').click()
                    cy.log(cy.url());
                    cy.url().should("include", newProductToSelect)
                }
            })
        })

    });
})
