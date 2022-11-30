import {Swaglabs} from './MelissaPageObject'
const swaglabs = new Swaglabs()

describe("Testing cart", () => {

    test("Add all items to cart", async () => {
        await swaglabs.navigate()
        await swaglabs.login("standard_user", "secret_sauce")
        await swaglabs.click(swaglabs.loginBtn)
        await swaglabs.click(swaglabs.addBackpack)
        await swaglabs.click(swaglabs.addLight)
        await swaglabs.click(swaglabs.addBoltTshirt)
        await swaglabs.click(swaglabs.addJacket)
        await swaglabs.click(swaglabs.addOnesie)
        await swaglabs.click(swaglabs.addTshirtRed)
        await swaglabs.click(swaglabs.shoppingCart)
        await swaglabs.driver.sleep(2000)
    })
    
    test("Remove all items from cart", async () => {
        await swaglabs.click(swaglabs.removeBackpack)
        await swaglabs.click(swaglabs.removeLight)
        await swaglabs.click(swaglabs.removeBoltTshirt)
        await swaglabs.click(swaglabs.removeJacket)
        await swaglabs.click(swaglabs.removeOnsie)
        await swaglabs.click(swaglabs.removeTshirtRed)
        await swaglabs.driver.sleep(2000) 
        await swaglabs.driver.quit()  
    })
})