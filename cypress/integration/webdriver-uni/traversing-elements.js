/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({force: true});
  })
  it("children() to get the children of DOM elements", () => {
    cy.get(".traversal-breadcrumb").children(".active").should("contain", "Contact Us")
  });

  it("closest() to validate the closest ancestor DOM element", () => {
    cy.get(".traversal-badge").closest("ul").should("have.class", "list-group")
    // selects close ul from element having the class traversal-badge
  });

  it("eq() to retrieve a specific element based on index", () => {
    // select milk from the list
    cy.get(".traversal-drinks-list").children().eq(2).should('contain', "Milk")
  });

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get(".btn-group-toggle > *").filter(".active")
        .should("have.class", "active")
        .should("contain","Button-1")
  });

  it("find() to retrieve DOM elements of a given selector", () => {
    cy.get(".traversal-pagination").find("li").find("a").should("have.length", 7)
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get(".bg-info > td").first().should("contain.text", "Andy")
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get(".bg-info > td").last().should("contain.text", "Scott")
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    // cy.get(".traversal-drinks-list").find("li").contains("Tea").nextAll().should("have.length", 3)
    cy.get.contains("Tea").nextAll().should("have.length", 3)
  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    // starting dekhi end samma ko bich ma kaati data cha
    cy.get("#coffee").nextUntil("#espresso").should("have.length", 2)
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    cy.get(".traversal-button-states > button").not(".disabled")
        .should("not.have.class", "disabled")
        .should("not.have.text", "Warning")
  });

  it.only("parent() To get parent DOM element of elements", () => {
    cy.get(".traversal-mark").parent().should("contain", "Lorem ipsum dolor sit amet, consectetur adipiscing elit")
    cy.get(".traversal-marked-text").parent().should("have.class", "thumbnail")
  });

  it("parents() to get parents DOM element of elements", () => {
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
  });

  it("siblings() To get all sibling DOM elements of elements", () => {
  });
});
