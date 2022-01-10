const landingPageUrl = "http://webdriveruniversity.com";

describe("Verify mouse actions", ()=>{
    it('Scroll element into view', function () {
        cy.visit(landingPageUrl);

        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})
    });

    it('Verify drag and drop', function () {
        cy.visit(landingPageUrl);

        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})

        cy.get('#draggable').trigger("mousedown", {which:1}) // clicks on center of that element

        cy.get('#droppable').trigger("mousemove").trigger("mouseup", {force:true})
    });
})
