import HomePage from "../../pageObjects/HomePage";
import BasePage from "../../pageObjects/BasePage";
import LoginPage from "../../pageObjects/LoginPage";
import RegisterPage from "../../pageObjects/RegisterPage";
import AddressPage from "../../pageObjects/AddressPage";
import WalletPage from "../../pageObjects/WalletPage";
/*
describe("Juice-shop", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Registration", () => {
   // TODO: Implement me
   //Click Account button
    HomePage.accountBtn.click();
   //Click login
    HomePage.loginBtn.click();
   //Click "Not yet a customer?" link
    LoginPage.newCustomerLink.click();
   //Set all the necessary info
    RegisterPage.emailField.type("random_email"+ Math.floor(Math.random() * 100)+"@gmail.com");
    RegisterPage.password.type("Password");
    RegisterPage.passwordRepeat.type("Password");
    RegisterPage.securityQuestionField.click();
    RegisterPage.securityQuestionItems.eq(1).click();
    RegisterPage.answerField.type("testing");
   //Click Register
    RegisterPage.registerButton.click();
    LoginPage.assertIsCurrentPage();
   //Validate that Toast message contains: "Registration completed successfully. You can now log in."
    LoginPage.toastMessage.should("have.text", "Registration completed successfully. You can now log in.")
   //Blockers
  });

  it("Login into system using demo account", () => {
    //demo acc:
    //
      // Click Account button
      HomePage.accountBtn.click();
      HomePage.loginBtn.click();

      LoginPage.loginEmail.type("demo");
      LoginPage.loginPassword.type("demo");

      LoginPage.loginButton.click();
      HomePage.accountBtn.click();

      HomePage.goToUserProfile.should("contain", "demo")
    
      
    });
*/

describe("Juice-shop, autologin", () =>{
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });
  it.only("Autologin", () => {

    HomePage.accountBtn.click();
    HomePage.goToUserProfile.should("contain", "demo");
  });
  /*
  it.only("Validate Lemon", () =>{
    // Search and validate Lemon
    HomePage.searchButton.click();
    // - Search for Lemon
    HomePage.search.type("lemon{enter}");
    // - Click on Lemon card
    HomePage.juiceCards.contains("Lemon").click();
    // Validate - "Sour but full of vitamins."
    HomePage.descriptionText.should("contain", "Sour but full of vitamins.")
    
    })
  */
 /*
  it.only("Validate Lemon by 500ml", () => {
    // Search 500ml and validate Lemon
    HomePage.searchButton.click();
    // - Search for 500ml
    HomePage.search.type("500ml{enter}");
    // - Click on Lemon card
    HomePage.juiceCards.contains("Lemon").click();
    // Validate - "Sour but full of vitamins."
    HomePage.descriptionText.should("contain", "Sour but full of vitamins.")

  })
  */
  /*
  it.only("Validate All 500ml", () => {
    // Search 500ml and validate All cards
    // - Search for 500ml
    HomePage.searchButton.click();
    HomePage.search.type("500ml{enter}");
    // - Validate Eggfruit => "Now with even more exotic flavour."
    HomePage.juiceCards.contains("Eggfruit").click();
    HomePage.descriptionText.should("contain", "Now with even more exotic flavour.");
    HomePage.closeDescription.click();
    // - Validate Lemon => "Sour but full of vitamins."
    HomePage.juiceCards.contains("Lemon").click();
    HomePage.descriptionText.should("contain", "Sour but full of vitamins.");
    HomePage.closeDescription.click();
    // - Validate Strawberry => "Sweet & tasty!"
    HomePage.juiceCards.contains("Strawberry").click();
    HomePage.descriptionText.should("contain", "Sweet & tasty!");
    HomePage.closeDescription.click();
  })
  */
  /*
  it.only("Validate sets of cards", () => {
  // Validate different sets of available cards -> 12, 24, 36
  
  // Set Items per page to 12
    HomePage.itemsPerPage.click();
    HomePage.itemsPerPageList.contains(12).click();
  // Validate that we see 12 items
    HomePage.juiceCards.should("have.length", 12);
  // Set Items per page to 24
    HomePage.itemsPerPage.click();
    HomePage.itemsPerPageList.contains(24).click();
  // Validate that we see 24 items
    HomePage.juiceCards.should("have.length", 24);
  // Set Items per page to 36
  HomePage.itemsPerPage.click();
  HomePage.itemsPerPageList.contains(36).click();
    // Validate that we see 35 items
  HomePage.juiceCards.should("have.length", 35);
  })
  */
 /*
  it.only("Review for King", () => {
    // Read a review for King
    // - Search for King
    HomePage.searchButton.click();
    HomePage.search.type("king{enter}");
    // - Validate that the review contains "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
    HomePage.juiceCards.contains("King").click();
    HomePage.openReviews.click();
    HomePage.reviews.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
  })
  */
  /*
  it.only("Adding review to Raspberry", () => {
    // Add a review for Raspberry
    // - Search for Raspberry
    HomePage.searchButton.click();
    HomePage.search.type("raspberry{enter}");
    // - Add review => "Tastes like metal"
    HomePage.juiceCards.contains("Raspberry").click();
    HomePage.reviewInput.click();
    HomePage.reviewInput.type("Tastes like metal");
    HomePage.submitReview.click();
    // - Validate that review contains "Tastes like metal"
    HomePage.openReviews.click();
    HomePage.reviews.contains("Tastes like metal");
  })
  */
 /*
  it.only("Add adress", () => {
    // Add address
    // Open Saved addresses page (/#/address/saved) (directly)
    AddressPage.visit();
    // Add new address (add all info)
    AddressPage.addAnAdress.click();
    AddressPage.country.type("Ireland");
    AddressPage.name.type("Mick O'Shealy");
    AddressPage.mobileNumber.type("61079566");
    AddressPage.zipCode.type("72343");
    AddressPage.address.type("Zem tilta");
    AddressPage.city.type("Dublin");
    AddressPage.submitButton.click()
    // validate newly added address
    AddressPage.toastMessage.should("have.text", "The address at Dublin has been successfully added to your addresses.");
    AddressPage.findRow ("Ireland",).should("contain", "Zem tilta");
  });
  */

  it.only("Increase Wallet Balance", () =>{
    // Increase Wallet Balance

    // Open wallet page (/#/wallet) (directly)
    WalletPage.visit();
    WalletPage.walletBalance.should("be.visible").then((el) => {
      cy.wrap(el.text()).as("currentBalanceValue");
    });
    // Save current balance amount
    
    // Add 100

    // Validate that balance has increased by 100
  })
});


    // Add Payment option
    // Open Saved payments page (/#/saved-payment-methods) (directly)

    // Add new card (name, card number, expiry date)


    // Validate that card is added


