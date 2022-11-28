import {By, WebDriver, until} from "selenium-webdriver"

export class swagLabsPage {
    driver: WebDriver;
    url: string = "https://www.saucedemo.com/"

    bot: By = By.xpath('//div[@class= "bot_column"]')
    userNameIpt: By = By.xpath('//input[@name= "user-name"]')
    passwordIpt: By = By.xpath('//input[@name= "password"]')
    loginBtn: By = By.xpath('//input[@name= "login-button"]')
    clearErrorBtn: By = By.xpath('//button[@class="error-button"]')
    appLogo: By = By.xpath('//div[@class="app_logo"]')
    shoppingCart: By = By.xpath('//a[@class="shopping_cart_link"]')
    contShoppingBtn: By = By.xpath('//button[@name="continue-shopping"]')
    checkoutBtn: By = By.xpath('//button[@name="checkout"]')
    firstNameInput: By = By.xpath('//input[@name="firstName"]')
    lastNameInput: By = By.xpath('//input[@name="lastName"]')
    zipInput: By = By.xpath('//input[@name="postalCode"]')
    cancelBtn: By = By.xpath('//button[@name="cancel"]')
    continuechkBtn: By = By.xpath('//input[@name="continue"]')
    finishBtn: By = By.xpath('//button[@name="finish"]')
    backHomeBtn: By = By.xpath('//button[@name="back-to-products"]')
    BTP: By = By.xpath('//button[@name="back-to-products"]')
    menuBtn: By = By.xpath('//button[@id= "react-burger-menu-btn"]')
    allItemsBtn: By = By.xpath('//a[@id="inventory_sidebar_link"]')
    logoutBtn: By = By.xpath('//a[@id= "logout_sidebar_link"]')
    backpackATC: By = By.xpath('//button[@name="add-to-cart-sauce-labs-backpack"]')
    bikeLightATC: By = By.xpath('//button[@name="add-to-cart-sauce-labs-bike-light"]')
    boltTShirtATC: By = By.xpath('//button[@name="add-to-cart-sauce-labs-bolt-t-shirt"]')
    fleeceJacketATC: By = By.xpath('//button[@name="add-to-cart-sauce-labs-fleece-jacket"]')
    onesieATC: By = By.xpath('//button[@name="add-to-cart-sauce-labs-onesie"]')
    redTShirtATC: By = By.xpath('//button[@name="add-to-cart-test.allthethings()-t-shirt-(red)"]')

    constructor(driver: WebDriver) {
        this.driver = driver
    }
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.bot));
      };
    async login() {
        await this.driver.wait(until.elementLocated(this.bot));
        await this.driver.findElement(this.userNameIpt).click();
        await this.driver.findElement(this.userNameIpt).clear();
        await this.driver.findElement(this.userNameIpt).sendKeys("standard_user");
        await this.driver.findElement(this.passwordIpt).click();
        await this.driver.findElement(this.passwordIpt).clear();
        await this.driver.findElement(this.passwordIpt).sendKeys("secret_sauce");
        await this.driver.findElement(this.loginBtn).click();       
    };
    

};