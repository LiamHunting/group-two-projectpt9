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
            
            await menPage.setInput(menPage.addUserName, "standard_user");
            await menPage.setInput(menPage.addPassword, "secret_sauce");
            await menPage.click(menPage.loginBtn);
            await menPage.click(menPage.menuBtn);
            await menPage.click(menPage.logoutBtn);// Need to find the corret selector. how use xpath for this one



        });
    });
    
    
      