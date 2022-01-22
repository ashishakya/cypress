class ContactUs_PO {
    contactFormSubmission(firstName, lastName, email, feedback) {
        cy.get('[name="first_name"]').type(firstName);
        cy.get('[name="last_name"]').type(lastName);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(feedback);
    }
}

export default ContactUs_PO
