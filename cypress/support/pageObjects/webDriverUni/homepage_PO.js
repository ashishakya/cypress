class Homepage_PO {
    visitHomePage(){
        cy.visit(Cypress.env("web_driver_home_page_url"));
    }
    clickOnContactUsButton(){
        cy.get("#contact-us").invoke("removeAttr", "target").click({force: true});
    }
}

export default Homepage_PO
