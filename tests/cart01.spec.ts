import { test, expect } from '@playwright/test';

test('Buy one t-shirt', async ({ page }) => {
  await page.goto('https://shop.teamgullit.com/');
  await page.getByRole('link', { name: 'Shop now' }).click();
  await page.getByText('L', { exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByText('XL', { exact: true }).click();
  await page.getByText('XL', { exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('button', { name: 'Check Out' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('henryk.sosna@wp.pl');
  await page.getByRole('combobox', { name: 'Country/Region' }).selectOption('PL');
  await page.getByPlaceholder('First name').click();
  await page.getByPlaceholder('First name').fill('Henryk');
  await page.getByPlaceholder('Last name').click();
  await page.getByPlaceholder('Last name').fill('Sosna');
  await page.getByPlaceholder('Address').click();
  await page.getByPlaceholder('Address').fill('Grunwaldzka');
  await page.getByPlaceholder('Apartment, suite, etc. (optional)').click();
  await page.getByPlaceholder('Apartment, suite, etc. (optional)').fill('15');
  await page.getByPlaceholder('Postal code').click();
  await page.getByPlaceholder('Postal code').fill('80-134');
  await page.getByPlaceholder('City').click();
  await page.getByPlaceholder('City').fill('Gdansk');
  await page.getByRole('button', { name: 'Continue to shipping' }).click();
  await page.getByRole('button', { name: 'Continue to payment' }).click();
});