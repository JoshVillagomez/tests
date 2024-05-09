import { test, expect } from '@playwright/test';
import { title } from 'process';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('log into ML and shop for a Black Iphone 15 pro max with 256GB', async ({ page }) => {
  

  await page.goto('https://www.mercadolibre.com.mx/')

  await page.locator('input[id=\'cb1-edit\']').fill('Iphone')
  await page.keyboard.press('Enter')
  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible()
  //await page.pause()

  //const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h2').allInnerTexts()

  /*console.log('the total number of results is:', titles.length)
  for(let title of titles){
    console.log('the title is:', title)
  }*/
  //await page.locator('a.ui-search-link[title="Apple iPhone 15 Pro Max (256 GB) - Titanio Negro - Distribuidor Autorizado"]').click()
  await page.click('xpath=//a[@class="ui-search-item__group__element ui-search-link__title-card ui-search-link" and @title="Apple iPhone 15 Pro Max (256 GB) - Titanio Negro - Distribuidor Autorizado"]'); 
  await page.locator('//button[@id=\':R15d3a6c4um:\']').click();
    await page.waitForSelector('//h1[@class=\'center-card__title\']');
    await page.pause()
  //await page.goto('https://www.mercadolibre.com.mx/');

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

 
});

test('test locators getByRole', async ({ page }) => {


  await page.goto('https://www.mercadolibre.com.mx');
  await page.getByRole('link', {name: 'Ingresa', exact:true}).click();
  await page.pause();

});

test('Replacing GetByRole instead Xpath/ccs', async ({ page }) => {
 
  await page.goto('https://www.mercadolibre.com.mx/')
  await page.getByRole('combobox', {name: 'Ingresa lo que quieras encontrar', exact: true}).fill('Iphone');
  await page.keyboard.press('Enter')
  await page.getByRole('heading', {name: 'Iphone - Ofertas Hot Sale 2024'}).isVisible();
  await page.getByRole('heading', {name: 'Apple iPhone 15 Pro (128 GB) - Titanio Natural - Distribuidor autorizado'}).click();
  await page.getByRole('button', {name: 'Comprar ahora', exact:true}).click();
  await page.getByRole('heading', {name: '¡Hola! Para comprar, ingresa a tu cuenta', exact:true}).isVisible();
  await page.pause();

});
