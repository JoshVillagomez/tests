import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/LoginPage';
import { log } from 'console';



test('navigate', async ({ page }) => {
    await page.goto(process.env.URL)
    await page.pause()
})

test('purchase and item as STANDAR USER', async ({page}) => {

    await page.goto('https://www.saucedemo.com');
   /*await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();*/
    
    const loginPage = new LoginPage(page);
    /*await loginPage.fillUsername('standard_user');
    await loginPage.fillPassword('secret_sauce');
    await loginPage.clickOnLogin();*/

    await loginPage.loginWithCredentials('standard_user', 'secret_sauce');
    await loginPage.checkSuccessfulLogin();

    const itemsContainer = await page.locator('#inventory_container .inventory_item').all();

    const randomIndex = Math.floor(Math.random() * itemsContainer.length);

    const randomItem = itemsContainer[randomIndex];

    const expectedDescription = await randomItem.locator('.inventory_item_desc').innerText();
    const expectedName = await randomItem.locator('.inventory_item_name ').innerText();
    const expectedPrice = await randomItem.locator('.inventory_item_price').innerText();

    console.log(`Price: ${expectedPrice} Name: ${expectedName} Description: ${expectedDescription}`)

    await randomItem.getByRole('button', {name: 'Add to cart'}).click();

    await page.locator('.shopping_cart_link').click();

    //Assert Checkout Button visible
    expect(page.getByRole('button', {name: 'Checkout'})).toBeVisible();
    
    //Assert Name, Description, Price to be the same as the ones displayed in the items page
    const actualDescription = await page.locator('.inventory_item_desc').innerText();
    const actualName = await page.locator('.inventory_item_name').innerText();
    const actualPrice = await page.locator('.inventory_item_price').innerText();

    console.log(`APrice: ${actualPrice} AName: ${actualName} ADescription: ${actualDescription}`)
    
    expect(actualDescription).toEqual(expectedDescription);
    expect(actualName).toEqual(expectedName);
    expect(actualPrice).toEqual(expectedPrice);
    
    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.getByRole('textbox', {name: 'First Name'}).fill('Vegeta');
    await page.getByRole('textbox', {name: 'Last Name'}).fill('Saiyan');
    await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('97320');
    await page.getByRole('button', {name: 'Continue'}).click();
    
    //Assert Name, Description, Price to be the same as the ones displayed in the checkout page
    const checkoutDescription = await page.locator('.inventory_item_desc').innerText();
    const checkoutName = await page.locator('.inventory_item_name').innerText();
    const checkoutPrice = await page.locator('.inventory_item_price').innerText();

    console.log(`CPrice: ${checkoutPrice} CName: ${checkoutName} CDescription: ${checkoutDescription}`);
    
    expect(checkoutDescription).toEqual(expectedDescription);
    expect(checkoutName).toEqual(expectedName);
    expect(checkoutPrice).toEqual(expectedPrice);

    await page.getByRole('button', {name: 'Finish'}).click();

    //Assert Green Check and Thank for your order! message are displayed in the page.
    expect(page.getByRole('heading', {name: 'Thank you for your order!'})).toBeVisible();

    await page.pause();








});