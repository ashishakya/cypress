/// <reference types="Cypress" />
describe("Work around with date picker", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({force: true});
    })


    it('get date from datepicker ui', () => {
        let date1 = new Date();
        date1.setDate(date1.getDate()) //get current day ie. 1-31
        // cy.log(date1.getDate())

        let date2 = new Date();
        date2.setDate(date2.getDate() + 5) // number of days you want to add from today
        // cy.log(date2.getDate())

        const date = new Date();
        date.setDate(date.getDate() + 365);

        let futureYear = date.getFullYear();
        let futureMonth  = date.toLocaleString("default", {month: "long"}) // June, July, August in full form
        let futureDay = date.getDate()

        cy.log('future year-->', futureYear)
        cy.log('future month-->', futureMonth)
        cy.log('future date-->', futureDay)
        clickOnDatePicker().then(()=>{
            selectMonthAndYear()
        });

        function clickOnDatePicker(){
            return cy.get(".input-group-addon").click({multiple:true})
        }

        function selectMonthAndYear(){
            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDateElement=>{
                // add gareko year ma lagna khojeko
                // if 2025 chayo bhane 2025 naaye samma click next bhaneko
                if(!currentDateElement.text().includes(futureYear)){
                    cy.get(".next").first().click()
                    selectMonthAndYear();
                }
            })
        }
    });
});
