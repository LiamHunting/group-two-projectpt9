import{ Builder,By, Capabilities, until, WebDriver, WebElement,} from "selenium-webdriver"
export class swagMenuLO{
driver: WebDriver;
url: string = "https://www.saucedemo.com/";
header: By= By.css('.login_wrapper')
addUserName: By = By.xpath('//input[@name= "user-name"]')
addPassword: By = By.xpath('//input[@name= "password"]')
loginBtn: By = By.xpath('//input[@name= "login-button"]')
menuBtn: By = By.xpath('//button[@id = "react-burger-menu-btn"]')
allItemsBtn: By =By.xpath('(//a[@class="bm-item menu-item"])[1]')
logoutBtn: By = By.xpath('(//a[@class="bm-item menu-item"])[3]')
inventoryItem: By = By.xpath('(//img[@class="inventory_item_img"])[2]')
constructor(driver: WebDriver){
    this.driver = driver

}
async navigate() {
    await this.driver.get(this.url);
    await this.driver.wait(until.elementLocated(this.header))
}
async click (elementBy: By) {
    await this.driver.wait(until.elementLocated(elementBy))
    return (await this.driver.findElement(elementBy)).click()
    
}
async sendKeys(elementBy: By, keys){
    await this.driver.wait(until.elementLocated(elementBy))
    return this.driver.findElement(elementBy).sendKeys(keys)
}
async getText (elementBy){
    await this.driver.wait(until.elementLocated(elementBy))
    return this.driver.findElement(elementBy).getText()
}
async setInput(elementBy: By, keys:any):Promise<void>{
    let input = await this.driver.findElement(elementBy)
    await input.click()
    await input.clear()
    return input.sendKeys(keys)
};
};