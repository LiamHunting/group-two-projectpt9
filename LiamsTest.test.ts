import { AcceptedUsers } from "./LiamsLoginInfoPage";
import { swagLabsPage } from "./LiamsBasePage";
import {until} from "selenium-webdriver"
const swagP = new swagLabsPage();

const Users = AcceptedUsers;


let testLogin = async (Users) => {
    await swagP.navigate()
    await swagP.driver.wait(until.elementLocated(swagP.bot));
    await swagP.setInput(swagP.userNameIpt, `${Users}`)
    console.log(Users);
    await swagP.setInput(swagP.passwordIpt, "secret_sauce");
    await swagP.click(swagP.loginBtn);
    await swagP.click(swagP.menuBtn);
    await swagP.click(swagP.logoutBtn);

};

describe("Test for SwagLabs Webpage", () => { 

    test("Loggin in using accepted usernames", async () => {
        for(let i = 0; i < Users.length; i++) {
            await testLogin(Users[i]);
        };
        await swagP.driver.sleep(1000);
    });
    test("Testing locked out user, and verifying error message", async () => {
        await swagP.driver.wait(until.elementLocated(swagP.bot));
        await swagP.setInput(swagP.userNameIpt, "locked_out_user");
        await swagP.setInput(swagP.passwordIpt, "secret_sauce");
        await swagP.click(swagP.loginBtn);
        await swagP.driver.wait(until.elementLocated(swagP.lockedOutError));
        let lockoutError = await swagP.driver.findElement(swagP.lockedOutError).getText();
        expect(lockoutError).toContain("Epic sadface: Sorry, this user has been locked out.");
        await swagP.driver.quit();

    });

});