import {BasePage} from "./basePage";
import { swagLabsPage } from "./Liam'sBasePage";
import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver"

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const swagP = new swagLabsPage(driver);

describe("Test for SwagLabs Webpage", () => {
    beforeEach(async () => {
        await swagP.navigate();
    });
    afterAll(async () => {
        await driver.quit();
    });

    test("Loggin in", async () => {
        await driver.wait(until.elementLocated(swagP.bot));
        await driver.findElement(swagP.userNameIpt).click();
        await driver.findElement(swagP.userNameIpt).clear();
        await driver.findElement(swagP.userNameIpt).sendKeys("standard_user");
        await driver.findElement(swagP.passwordIpt).click();
        await driver.findElement(swagP.passwordIpt).clear();
        await driver.findElement(swagP.passwordIpt).sendKeys("secret_sauce");
        await driver.findElement(swagP.loginBtn).click();
        await driver.wait(until.elementLocated(swagP.appLogo));
        
    });
    test("login method functionality", async () => {
        await swagP.login();
    });
});