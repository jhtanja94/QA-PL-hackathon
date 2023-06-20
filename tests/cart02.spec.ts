import { test, expect, devices } from '@playwright/test';

test('Buy 10 T-shirts', async ({ page }) => {
  //page.setViewportSize(devices['iPhone X'].viewport);
  await page.goto('https://shop.teamgullit.com/');
  await page.getByRole('link', { name: 'Shop now' }).click();
  await page.getByText('L', { exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByLabel('Special instructions for seller').click();
  await page.getByLabel('Special instructions for seller').fill('Hello');

  function increaseNumberOfItems(number: number) {
    
  }
  await page.getByRole('button', { name: 'Increase item quantity by one' }).click();
  await expect(page.locator('input.ajaxcart__qty-num')).toHaveValue('2')
  await page.getByRole('button', { name: 'Increase item quantity by one' }).click();
  await expect(page.locator('input.ajaxcart__qty-num')).toHaveValue('3')
  await page.getByRole('button', { name: 'Increase item quantity by one' }).click();
  await expect(page.locator('input.ajaxcart__qty-num')).toHaveValue('4')

  // await page.getByRole('button', { name: 'Increase item quantity by one' }).click();
  // await page.getByLabel('Special instructions for seller').click();
  // await page.getByRole('button', { name: 'Increase item quantity by one' }).click();
  // await page.getByLabel('Special instructions for seller').click();
  // await page.getByRole('button', { name: 'Increase item quantity by one' }).click();
  // await page.getByLabel('Special instructions for seller').click();
  // await page.getByRole('button', { name: 'Increase item quantity by one' }).click();
  // await page.getByLabel('Special instructions for seller').click();
  // await page.getByRole('button', { name: 'Increase item quantity by one' }).click();
  // await page.getByLabel('Special instructions for seller').click();
  // await page.getByRole('button', { name: 'Increase item quantity by one' }).click();
  await page.getByRole('button', { name: 'Check Out' }).click();
  await page.getByPlaceholder('Email').click();
});