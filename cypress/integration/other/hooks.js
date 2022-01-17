describe('Verify Hooks', () => {
    before(() => {
        cy.log("runs once before all the test in the block")
        // runs once before all tests in the block
    })

    beforeEach(() => {
        cy.log("runs before each test in the block")
        // runs before each test in the block
    })

    afterEach(() => {
        cy.log("runs after each test in the block")

        // runs after each test in the block
    })
    it("test 1 ", ()=>cy.log("test 1 execution"))
    it("test 2 ", ()=>cy.log("test 2 execution"))
    it("test 3 ", ()=>cy.log("test 3 execution"))
    it("test 4 ", ()=>cy.log("test 4 execution"))
    it("test 5 ", ()=>cy.log("test 5 execution"))

    after(() => {
        cy.log("runs once after all the test in the block")

        // runs once after all tests in the block
    })
})
