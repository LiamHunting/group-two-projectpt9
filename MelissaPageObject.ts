import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class Swaglabs extends BasePage {
    username: By = By.id("user-name")
    password: By = By.id("password")
    loginBtn: By = By.id("login-button")
    addBackpack: By = By.name("add-to-cart-sauce-labs-backpack")
    addLight: By = By.id("add-to-cart-sauce-labs-bike-light")
    addBoltTshirt: By = By.name("add-to-cart-sauce-labs-bolt-t-shirt")
    addJacket: By = By.name("add-to-cart-sauce-labs-fleece-jacket")
    addOnesie: By = By.id("add-to-cart-sauce-labs-onesie")
    addTshirtRed: By = By.id("add-to-cart-test.allthethings()-t-shirt-(red)")
    shoppingCart: By = By.className("shopping_cart_link")
    removeBackpack: By = By.id("remove-sauce-labs-backpack")
    removeLight: By = By.id("remove-sauce-labs-bike-light")
    removeBoltTshirt: By = By.id("remove-sauce-labs-bolt-t-shirt")
    removeJacket: By = By.name("remove-sauce-labs-fleece-jacket")
    removeOnsie: By = By.name("remove-sauce-labs-onesie")
    removeTshirtRed: By = By.name("remove-test.allthethings()-t-shirt-(red)")

    constructor () {
       super({url: "https://www.saucedemo.com/"})
    }
    async login (username: string, password: string) {
        await this.setInput(this.username, "standard_user")
        await this.setInput(this.password, "secret_sauce")
    }
}