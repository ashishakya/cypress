const landingPageUrl = "http://webdriveruniversity.com";

describe("Handling data via web driver uni", () => {
    beforeEach(() => {
        cy.visit(landingPageUrl);

        cy.get("#data-table").invoke("removeAttr", "target").click({force: true})
    })

    it('Verify the total of age field of all users', function () {
        const userDetails = [];
        let totalAge = 0;

        cy.get("#thumbnail-1 td").each((el, index) => {
            userDetails[index] = el.text();
        }).then(() => {
                var  i;
                for(i=0; i< userDetails.length; i++){
                    if(Number(userDetails[i])){
                        totalAge+=Number(userDetails[i])
                    }
                }
                expect(totalAge).equals(322)
        })
    })

    it.only('Verify the age based on the lastname from data table', function () {
        cy.get("#thumbnail-1 td").contains("Jackson").next().should("contain.text", 45)
    })
})
