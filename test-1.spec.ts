import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com/');
  await page.getByRole('link', { name: 'México' }).click();
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('Iphone');
  await page.getByPlaceholder('Buscar productos, marcas y má').press('Enter');
  await page.getByRole('link', { name: 'Apple iPhone 15 (128 GB) - Azul - Distribuidor Autorizado' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});