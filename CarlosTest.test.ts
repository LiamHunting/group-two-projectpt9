import {Swaglabs} from './CarlosPageObject'


const productsURL = "https://www.saucedemo.com/inventory.html"
const loginURL = "https://www.saucedemo.com/"

// Successful logins

test('Successful login standard_user', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("standard_user", "secret_sauce")
    console.log("Login successful. Getting current URL")
    let currentURL = await swaglabs.driver.getCurrentUrl();
    expect(currentURL).toBe(productsURL)
   await swaglabs.driver.quit();
})

test('Successful login problem_user', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("problem_user", "secret_sauce")
    console.log("Login successful. Getting current URL")
    let currentURL = await swaglabs.driver.getCurrentUrl();
    expect(currentURL).toBe(productsURL)
   await swaglabs.driver.quit();
})

test('Successful login performance_glitch_user', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("performance_glitch_user", "secret_sauce")
    console.log("Login successful. Getting current URL")
    let currentURL = await swaglabs.driver.getCurrentUrl();
    expect(currentURL).toBe(productsURL)
   await swaglabs.driver.quit();
})


// Unsuccessful logins

test('Unsuccessful login locked_out_user', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("locked_out_user", "secret_sauce")
    let currentURL = await swaglabs.driver.getCurrentUrl();
    expect(currentURL).toBe(loginURL)
   await swaglabs.driver.quit();
})

test('Unsuccessful login bad user name', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("bad_user_name", "secret_sauce")
    let currentURL = await swaglabs.driver.getCurrentUrl();
    expect(currentURL).toBe(loginURL)
   await swaglabs.driver.quit();
})


test('Unsuccessful login bad password', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("standard_user", "bad_password")
    let currentURL = await swaglabs.driver.getCurrentUrl();
    expect(currentURL).toBe(loginURL)
   await swaglabs.driver.quit();
})

test('Unsuccessful login no password', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("standard_user", "")
    let currentURL = await swaglabs.driver.getCurrentUrl();
    expect(currentURL).toBe(loginURL)
   await swaglabs.driver.quit();
})

test('Unsuccessful login no username', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("", "secret_sauce")
    let currentURL = await swaglabs.driver.getCurrentUrl();
    expect(currentURL).toBe(loginURL)
   await swaglabs.driver.quit();
})

test('Unsuccessful login no username and no password', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("", "")
    let currentURL = await swaglabs.driver.getCurrentUrl();
    expect(currentURL).toBe(loginURL)
   await swaglabs.driver.quit();
})

// Add to cart

test('Adding BackPack', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("standard_user", "secret_sauce")
    await swaglabs.addBackPack();
    let carQty = await swaglabs.getShoppingCartQty()
    expect("1").toBe(carQty)
    await swaglabs.driver.quit();
   
})


test('Adding BikeLight', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("standard_user", "secret_sauce")
    await swaglabs.addBikeLight();
    let carQty = await swaglabs.getShoppingCartQty()
    expect("1").toBe(carQty)
    await swaglabs.driver.quit();
   
})

test('Adding Backpack and BikeLight', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("standard_user", "secret_sauce")
    await swaglabs.addBackPack();
    await swaglabs.addBikeLight();
    let carQty = await swaglabs.getShoppingCartQty()
    expect("2").toBe(carQty)
    await swaglabs.driver.quit();
   
})



// Remove cart

test('Removing BackPack', async () => {
    const swaglabs = new Swaglabs()
    await swaglabs.navigate()
    await swaglabs.login("standard_user", "secret_sauce")
    await swaglabs.addBackPack();
 
    await swaglabs.removeBackPack();
    
    let removeButtonPresent: boolean;  
    
    let addButtonCount = await (await swaglabs.driver.findElements(swaglabs.backPackAddBtn)).length

   
  
    expect(addButtonCount).toBe(0)

    await swaglabs.driver.quit();
   
})


