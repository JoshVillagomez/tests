import { test, expect } from '@playwright/test';

test('purchase and item as STANDAR USER', async ({page}) => {

    await page.goto('https://www.saucedemo.com');
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    

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
    
    const actualDescription = await page.locator('.inventory_item_desc').innerText();
    const actualName = await page.locator('.inventory_item_name').innerText();
    const actualPrice = await page.locator('.inventory_item_price').innerText();

    console.log(`APrice: ${actualPrice} AName: ${actualName} ADescription: ${actualDescription}`)
    //Assert Name, Description, Price to be the same as the ones displayed in the items page
    expect(actualDescription).toEqual(expectedDescription);
    expect(actualName).toEqual(expectedName);
    expect(actualPrice).toEqual(expectedPrice);
    //await page.pause();
});