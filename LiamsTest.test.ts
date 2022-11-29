import {BasePage} from "./basePage";
import { AcceptedUsers } from "./LiamsLoginInfoPage";
import { swagLabsPage } from "./LiamsBasePage";
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

    test("Loggin in using accepted usernames", async () => {
        
        for (let i = 0; i < AcceptedUsers.length; i++ ) {
        await driver.wait(until.elementLocated(swagP.bot));
        await driver.findElement(swagP.userNameIpt).click();
        await driver.findElement(swagP.userNameIpt).clear();
        console.log(AcceptedUsers.at(i));
        let user = AcceptedUsers.at(i);
        await driver.findElement(swagP.userNameIpt).sendKeys(`${user}`);
        await driver.findElement(swagP.passwordIpt).click();
        await driver.findElement(swagP.passwordIpt).clear();
        await driver.findElement(swagP.passwordIpt).sendKeys("secret_sauce");
        await driver.findElement(swagP.loginBtn).click();
        await driver.findElement(swagP.menuBtn).click();
        await driver.findElement(swagP.logoutBtn).click();

        }

    });
    test("login method functionality", async () => {
        await swagP.login();
    });

});