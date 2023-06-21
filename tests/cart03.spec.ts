import { test, expect, devices } from "@playwright/test";
// test("test", async ({ page }) => {
//   page.setViewportSize({ width: 600, height: 600 });
//   // do stuff then resize to a particular device size
//   page.setViewportSize(devices["iPhone X"].viewport);
// });
test("test", async ({ page }) => {
  await page.goto("https://shop.teamgullit.com/");
  await page.click('text="Accept cookies"');
  const productSelectors = [
    "#AddToCart--1546613539953",
    "#AddToCart--1546875839923",
    "#AddToCart--16413956719d7663e7",
  ];
  const sizes = ["M", "L", "XL", "XXL"];
  for (const selector of productSelectors) {
    for (const size of sizes) {
      await page.click(selector);
      await page.click(`#ProductSelect--${selector.slice(12)}-option-0`);
      await page.click(`text="${size}"`);
    }
  }
  await page.click('button[aria-label="Close Cart"]');
  await page.click("#AddToCart--16413956719d7663e7");
  await page.fill(
    'textarea[aria-label="Special instructions for seller"]',
    "@#$%^&*()(*&^"
  );
  await page.click('button[name="Check Out"]');
  await page.fill('input[placeholder="Email"]', "test");
  await page.fill('input[placeholder="First name"]', "test");
  await page.fill('input[placeholder="Last name"]', "test");
  await page.fill('input[placeholder="Address"]', "test");
  await page.fill(
    'input[placeholder="Apartment, suite, etc. (optional)"]',
    "test12"
  );
  await page.fill('input[placeholder="Postal code"]', "80-890");
  await page.fill('input[placeholder="City"]', "gdansk");
  await page.click('button[name="Continue to shipping"]');
  await page.click('button[name="Continue to payment"]');
});