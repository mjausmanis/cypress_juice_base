import BasePage from "./basePage";

class WalletPage extends BasePage {
    static get url() {
        return "/#/wallet";
    }
    static get walletBalance(){
        return cy.get(".confirmation")
    }
    static get 
}

export default WalletPage;