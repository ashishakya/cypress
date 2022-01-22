class HairCare_Po {
    addHairCareProductsToBasket() {
        globalThis.data.productNames.forEach(product => cy.addProductToBasket(product).then(() => {
            // debugger
        }))
        cy.get(".dropdown-toggle > .fa").click()
    }
}

export default HairCare_Po
