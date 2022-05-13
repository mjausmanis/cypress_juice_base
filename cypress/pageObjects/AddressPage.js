import BasePage from "../pageObjects/basePage";

class AddressPage extends BasePage {
    static get url() {
        return "/#/address/saved";
    }
    static get addAnAdress() {
        return cy.get("[aria-label='Add a new address']");
    }
    static get country() {
        return cy.get("[data-placeholder='Please provide a country.']")
    }
    static get name() {
        return cy.get("[data-placeholder='Please provide a name.']")
    }
    static get mobileNumber() {
        return cy.get("[data-placeholder='Please provide a mobile number.']")
    }
    static get zipCode() {
        return cy.get("[data-placeholder='Please provide a ZIP code.']")
    }
    static get address() {
        return cy.get("[data-placeholder='Please provide an address.']")
    }
    static get city() {
        return cy.get("[data-placeholder='Please provide a city.']")
    }
    static get submitButton() {
        return cy.get("#submitButton")
    }
    static get rows() {
        return cy.get("[role='row']")
    }
    static findRow(value){
        return this.rows.contains(value).parent();
    }
}

export default AddressPage;