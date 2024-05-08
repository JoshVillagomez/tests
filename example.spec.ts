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
  await page.locator('a.ui-search-link[title="Apple iPhone 15 Pro Max (256 GB) - Titanio Negro - Distribuidor Autorizado"]').click()
    await page.getByRole('button', { name: 'Comprar ahora' }).click();
    await page.waitForSelector('h1.center-card__title');
    //await page.pause()
  //await page.goto('https://www.mercadolibre.com.mx/');

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});