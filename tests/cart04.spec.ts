import { test, expect } from '@playwright/test';

test('Add 200 items, validate available quantities', async ({ page }) => {
  await page.goto('https://shop.teamgullit.com/');
  await page.getByRole('link', { name: 'Shop now' }).click();
  await page.getByText('XL', { exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'Check Out' }).click();
  await page.getByRole('link', { name: 'Return to cart' }).click();
  await page.getByRole('textbox', { name: 'quantity' }).click();
  await page.getByRole('textbox', { name: 'quantity' }).fill('200');
  await page.getByRole('button', { name: 'Update Cart' }).click();
  await page.getByRole('button', { name: 'Check Out' }).click();
  await page.locator('header').filter({ hasText: 'Quantity updateAvailable quantities for these items have changed and are updated' }).getByRole('heading', { name: 'Quantity update' }).click();
  await page.getByText('Available quantities for these items have changed and are updated in your cart.').click();
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page).toHaveURL('https://shop.teamgullit.com/')
  await page.getByRole('link', { name: 'Shop now' }).click();
});