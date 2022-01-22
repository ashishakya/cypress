class HomePage_PO{
    visitHomePage(){
        cy.log("yeahh")
        cy.visit(Cypress.env("automation_test_store_home_page_url"));
    }

    visitHairCareMenu(){
        const menuTitle = "Hair Care";
        cy.get("a[href*='product/category&path='").contains(menuTitle).click()
    }
}

export default HomePage_PO
