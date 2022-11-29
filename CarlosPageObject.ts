import {By, until} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class Swaglabs extends BasePage {
    usernameBy: By = By.xpath('//*[@id="user-name"]')
    passwordBy: By = By.xpath('//input[@name= "password"]')
    loginBtn: By = By.xpath('//input[@name= "login-button"]')
    logo: By = By.xpath('//*[@id="root"]')
    productsLogo: By = By.xpath('//*[@id="header_container"]/div[2]/span')
    backPackAddBtn: By = By.xpath('//*[@id="add-to-cart-sauce-labs-backpack"]')
    backPackRmBtn: By = By.xpath('//*[@id="remove-sauce-labs-backpack"]')
    bikeLightAddBtn: By = By.xpath('//*[@id="add-to-cart-sauce-labs-bike-light"]')

    shoppingCart: By = By.xpath('//*[@id="shopping_cart_container"]/a/span')
 
    emptyShoppingCart: By = By.xpath('//*[@id="shopping_cart_container"]/a')
 

    constructor() {
        super({url: "https://www.saucedemo.com"})
    }
   
    async getProductText() {
        let text = await this.getElement(this.productsLogo);
        return text.getText();
    }

     async login(username: string, password: string) {
         await this.driver.wait(until.elementLocated(this.logo))
         await this.setInput(this.usernameBy, username )
         await this.setInput(this.passwordBy, password)
         await this.click(this.loginBtn)
         return
     }

     async addBackPack() {
        let backPackAdd = await this.getElement(this.backPackAddBtn)
        backPackAdd.click();
        return
     }

     async addBikeLight() {
        let bikeLightAdd = await this.getElement(this.bikeLightAddBtn)
        bikeLightAdd.click();
        return
     }

     async removeBackPack() {
        let backPackRemove = await this.getElement(this.backPackRmBtn)
        backPackRemove.click();
        return
     }


     async getShoppingCartQty() {
        let cart = await this.getElement(this.shoppingCart);
        let quantity = await cart.getText()
        return quantity

     }
}