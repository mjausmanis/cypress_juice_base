import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get accountBtn() {
    return cy.get("#navbarAccount")
  }

  static get loginBtn() {
    return cy.get("#navbarLoginButton")
  }
  static get menuItems() {
    return cy.get("[role='menuitem']")
  }
  static get goToUserProfile(){
    return cy.get("button[aria-label='Go to user profile']")
  }
  static get searchButton() {
    return cy.get("#searchQuery")
  }
  static get search(){
    return cy.get("#mat-input-0")
  }
  static get juiceCards() {
    return cy.get("[aria-label='Click for more information about the product']");
  }
  static get descriptionText() {
    return cy.get(".mat-dialog-content");
  }
  static get closeDescription() {
    return cy.get("[aria-label='Close Dialog']")
  }

  static get itemsPerPage() {
    return cy.get(".mat-select-trigger")
  }
  static get itemsPerPageList() {
    return cy.get(".mat-option-text")
  }
  static get openReviews() {
    return cy.get(".mat-expansion-panel-header")
  }
  static get reviews() {
    return cy.get(".comment")
  }
  static get reviewInput() {
    return cy.get("[aria-label='Text field to review a product']")
  }
  static get submitReview() {
    return cy.get("#submitButton")
  }
  static get ordersAndPayments() {
    return cy.get("[aria-label='Show Orders and Payment Menu'")
  }
}

export default HomePage;
