import BasePage from "../pageObjects/basePage";

class RegisterPage extends BasePage {
    static get url() {
        return "/#/register";
    }

    static get emailField(){
        return cy.get("#emailControl")
    }
    static get password(){
        return cy.get("#passwordControl")
    }
    static get passwordRepeat(){
        return cy.get("#repeatPasswordControl")
    }
    static get securityQuestionField(){
        return cy.get(".mat-select")
    }
    static get securityQuestionItems(){
        return cy.get(".mat-option-text")
    }
    static get answerField(){
        return cy.get("#securityAnswerControl")
    }
    static get registerButton(){
        return cy.get("#registerButton")
    }
}

export default RegisterPage;
