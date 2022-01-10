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

    it('Verify double mouse click', function () {
        cy.visit(landingPageUrl);

        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})

        cy.get('#double-click').trigger("dblclick")
    });

    it.only('Verify mouse click and hold', function () {
        cy.visit(landingPageUrl);

        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click({force:true})

        cy.get('#click-box').trigger("mousedown")
            .then((element)=>{
                expect(element).to.have.css("background-color", "rgb(0, 255, 0)")
        })
    });
})
