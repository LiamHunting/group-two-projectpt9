import {By, WebDriver, until} from "selenium-webdriver";

export class swagLabsPage {
    driver: WebDriver;
    url: string = "https://www.saucedemo.com";

    bot: By = By.xpath('//div[@class="bot_column"]');
    userNameIpt: By = By.xpath('//input[@name="user-name"]');
    passwordIpt: By = By.xpath('//input[@name="password"]');
    loginBtn: By = By.xpath('//input[@name="login-button"]');
    shoppingCart: By = By.xpath('//a[@class="shopping_cart_link"]');
    checkoutBtn: By = By.xpath('//button[@name="checkout"]');
    firstNameInput: By = By.xpath('//input[@name="firstName"]');
    lastNameInput: By = By.xpath('//input[@name="lastName"]');
    zipInput: By = By.xpath('//input[@name="postalCode"]');
    continuechkBtn: By = By.xpath('//input[@name="continue"]');
    finishBtn: By = By.xpath('//button[@name="finish"]');
    backHomeBtn: By = By.xpath('//button[@class="btn btn_primary btn_small"]');
    menuBtn: By = By.xpath('//button[@id="react-burger-menu-btn"]');
    backpackATC: By = By.xpath('//button[@name="add-to-cart-sauce-labs-backpack"]');

    constructor(driver: WebDriver) {
        this.driver = driver;
    };

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
        await this.driver.wait(until.elementLocated(this.menuBtn));
    };
};