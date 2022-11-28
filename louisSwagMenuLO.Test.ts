import {Builder, By, Capabilities,until,WebDriver} from "selenium-webdriver";
import { swagMenuLO} from "./louisSwagPOM";
    const chromedriver = require("chromedriver");
    const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
    
    
    const menPage = new swagMenuLO(driver);

    describe("menu logout feature", () => {
        beforeEach(async ()=>{
            await menPage.navigate();
        })
        afterAll(async () =>{
            await driver.quit();
        })
    
        test ("logout from the all items page", async () =>{
            /*
            await menPage.setInput(menPage.addUserName, "standard_user");
            await menPage.setInput(menPage.addPassword, "secret_sauce");
            await menPage.click(menPage.loginBtn);
            await menPage.click(menPage.menuBtn);
            await menPage.click(menPage.logoutBtn);// Need to find the corret selector. how use xpath for this one
            */
            await driver.findElement(menPage.addUserName).click();
            await driver.findElement(menPage.addUserName).clear();
            await driver.findElement(menPage.addUserName).sendKeys("standard_user");
            await driver.findElement(menPage.addPassword).click();
            await driver.findElement(menPage.addPassword).clear();
            await driver.findElement(menPage.addPassword).sendKeys("secret_sauce");
            await driver.findElement(menPage.loginBtn).click();
            await driver.findElement(menPage.inventoryItem).click();
            await driver.findElement(menPage.menuBtn).click();
            await driver.findElement(menPage.logoutBtn).click();


        });
    });
    
    
      