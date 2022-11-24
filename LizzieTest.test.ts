import {BasePage} from "./basePage";
import {swagLabsPage} from "./LizziePageObject";
import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
const swag = new swagLabsPage(driver);

describe("Lizzie's test for Swag Labs webpage", () => {
    beforeEach(async () => {
        await swag.navigate();
    });
    afterAll(async () => {
        await driver.quit();
    });
    test("Checkout functionality", async () => {
        await swag.login();
        await driver.findElement(swag.backpackATC).click();
        await driver.findElement(swag.shoppingCart).click();
        await driver.findElement(swag.checkoutBtn).click();
        await driver.findElement(swag.firstNameInput).click();
        await driver.findElement(swag.firstNameInput).clear();
        await driver.findElement(swag.firstNameInput).sendKeys("Test");
        await driver.findElement(swag.lastNameInput).click();
        await driver.findElement(swag.lastNameInput).clear();
        await driver.findElement(swag.lastNameInput).sendKeys("Name");
        await driver.findElement(swag.zipInput).click();
        await driver.findElement(swag.zipInput).clear();
        await driver.findElement(swag.zipInput).sendKeys("12345");
        await driver.findElement(swag.continuechkBtn).click();
        await driver.findElement(swag.finishBtn).click();
        await driver.findElement(swag.backHomeBtn).click();
    });
});