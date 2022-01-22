class ContactUs_PO {
    contactFormSubmission(firstName, lastName, email, feedback) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(feedback);
        // cy.wait(5000);
        cy.get('[type="submit"]').click()

        // predict: cross verify: assertion
        const successMessage = "Thank You for your Message!";
        cy.get('#contact_reply > h1').should("have.text", successMessage)
    }
}

export default ContactUs_PO
