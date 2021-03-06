/// <reference types="Cypress" />

// const landingPageUrl = "http://webdriveruniversity.com/Contact-Us/contactus.html";
import ContactUs_PO from "../../support/pageObjects/webDriverUni/contactUs_PO";

const landingPageUrl = "http://webdriveruniversity.com";
const assert = require("assert");
import Homepage_PO from "../../support/pageObjects/webDriverUni/homepage_PO";
describe("Test contact us page form via WebdriverUni", () => {
    Cypress.config({
        defaultCommandTimeout:20000,
    })

    // load the data once before the test executes
    before(() => {
        cy.log(Cypress.env("first_name"))
        cy.fixture("example.json").then((data) => {
            // this.data = data;
            globalThis.data = data // this works as well
        })

    })
    beforeEach(()=>{
        // way 1
        // cy.visit(landingPageUrl);

        // way 2
        // cy.navigateToWebDriverUniHomePage()

        // way 3
        const homePage_PO = new Homepage_PO();
        homePage_PO.visitHomePage();
        homePage_PO.clickOnContactUsButton()
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        //prepare
        // cy.visit('/'); // use of base url in cypress.json
        // cy.visit('https://google.com') // this will error

        // cy.get("#contact-us").invoke("removeAttr", "target").click({force: true});
        cy.document().should("have.property", "charset", "UTF-8")
        cy.title().should('eq', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus.html') // => true


        // perform
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type("this is my demo feedback");
        // cy.webDriverUni_contactForm_submission(
        //     data.first_name,
        //     data.last_name,
        //     data.email,
        //     "this is my demo feedback"
        // );

        const contactUsPO = new ContactUs_PO()
        contactUsPO.contactFormSubmission(
            data.first_name,
            data.last_name,
            data.email,
            "this is my demo feedback"
        )



    });

    it("Should not be able to submit a successful submission via contact us form as all field are required", () => {


        // cy.get("#contact-us").invoke("removeAttr", "target").click({force: true});

        cy.get('[type="submit"]').click()

        // cross verify
        cy.get('body').should("not.be.empty");
        cy.get('body').contains("Error");
    });
})
