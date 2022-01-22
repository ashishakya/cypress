class Homepage_PO {
    visitHomePage(){
        cy.visit(Cypress.env("web_driver_home_page_url"), {
            timeout: 60000 // 60 secs
        });
    }
    clickOnContactUsButton(){
        cy.get("#contact-us").invoke("removeAttr", "target").click({force: true});
    }
}

export default Homepage_PO
