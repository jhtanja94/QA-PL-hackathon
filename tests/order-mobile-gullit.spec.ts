import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://shop.teamgullit.com/");
  await page.getByText("Accept cookies").click();
  await page.locator("#AddToCart--1546613539953").click();
  await page
    .locator("#ProductSelect--1546613539953-option-0")
    .getByText("M")
    .click();
  await page
    .locator("#ProductSelect--1546613539953-option-0")
    .getByText("M")
    .click();
  await page.locator("#AddToCart--1546613539953").click();
  await page
    .locator("#ProductSelect--1546613539953-option-0")
    .getByText("L", { exact: true })
    .click();
  await page
    .locator("#ProductSelect--1546613539953-option-0")
    .getByText("L", { exact: true })
    .click();
  await page.locator("#AddToCart--1546613539953").click();
  await page
    .locator("#ProductSelect--1546613539953-option-0")
    .getByText("XL", { exact: true })
    .click();
  await page
    .locator("#ProductSelect--1546613539953-option-0")
    .getByText("XL", { exact: true })
    .click();
  await page.locator("#AddToCart--1546613539953").click();
  await page
    .locator("#ProductSelect--1546613539953-option-0")
    .getByText("XXL")
    .click();
  await page
    .locator("#ProductSelect--1546613539953-option-0")
    .getByText("XXL")
    .click();
  await page.locator("#AddToCart--1546613539953").click();
  await page.goto("about:blank");
  await page.goto("https://shop.teamgullit.com/");
  await page.locator("#AddToCart--1546875839923").click();
  await page
    .locator("#ProductSelect--1546875839923-option-0")
    .getByText("M")
    .click();
  await page
    .locator("#ProductSelect--1546875839923-option-0")
    .getByText("M")
    .click();
  await page.locator("#AddToCart--1546875839923").click();
  await page
    .locator("#ProductSelect--1546875839923-option-0")
    .getByText("L", { exact: true })
    .click();
  await page
    .locator("#ProductSelect--1546875839923-option-0")
    .getByText("L", { exact: true })
    .click();
  await page.locator("#AddToCart--1546875839923").click();
  await page
    .locator("#ProductSelect--1546875839923-option-0")
    .getByText("XL", { exact: true })
    .click();
  await page
    .locator("#ProductSelect--1546875839923-option-0")
    .getByText("XL", { exact: true })
    .click();
  await page.locator("#AddToCart--1546875839923").click();
  await page
    .locator("#ProductSelect--1546875839923-option-0")
    .getByText("XXL")
    .click();
  await page
    .locator("#ProductSelect--1546875839923-option-0")
    .getByText("XXL")
    .click();
  await page.locator("#AddToCart--1546875839923").click();
  await page.getByRole("button", { name: "Close Cart" }).click();
  await page.locator("#AddToCart--16413956719d7663e7").click();
  await page
    .locator("#ProductSelect--16413956719d7663e7-option-0")
    .getByText("M")
    .click();
  await page
    .locator("#ProductSelect--16413956719d7663e7-option-0")
    .getByText("M")
    .click();
  await page.locator("#AddToCart--16413956719d7663e7").click();
  await page
    .locator("#ProductSelect--16413956719d7663e7-option-0")
    .getByText("L", { exact: true })
    .click();
  await page
    .locator("#ProductSelect--16413956719d7663e7-option-0")
    .getByText("L", { exact: true })
    .click();
  await page.locator("#AddToCart--16413956719d7663e7").click();
  await page
    .locator("#ProductSelect--16413956719d7663e7-option-0")
    .getByText("XL", { exact: true })
    .click();
  await page
    .locator("#ProductSelect--16413956719d7663e7-option-0")
    .getByText("XL", { exact: true })
    .click();
  await page.locator("#AddToCart--16413956719d7663e7").click();
  await page
    .locator("#ProductSelect--16413956719d7663e7-option-0")
    .getByText("XXL")
    .click();
  await page
    .locator("#ProductSelect--16413956719d7663e7-option-0")
    .getByText("XXL")
    .click();
  await page.locator("#AddToCart--16413956719d7663e7").click();
  await page.getByLabel("Special instructions for seller").click();
  await page
    .getByLabel("Special instructions for seller")
    .fill("@#$%^&*()(*&^");
  await page.getByRole("button", { name: "Check Out" }).click();
  await page.getByPlaceholder("Email").fill("test");
  await page.getByPlaceholder("First name").click();
  await page.getByPlaceholder("First name").fill("test");
  await page.getByPlaceholder("Last name").fill("test");
  await page.getByPlaceholder("Address").fill("test");
  await page.getByPlaceholder("Apartment, suite, etc. (optional)").click();
  await page.getByLabel("Address", { exact: true }).click();
  await page.getByLabel("Address", { exact: true }).click();
  await page.getByLabel("Address", { exact: true }).fill("test12");
  await page.getByPlaceholder("Postal code").click();
  await page.getByPlaceholder("Postal code").fill("1689");
  await page.getByLabel("Postal code").click({
    clickCount: 3,
  });
  await page.getByLabel("Postal code").fill("80-890");
  await page.getByRole("button", { name: "Continue to shipping" }).click();
  await page.getByPlaceholder("City").fill("gdansk");
  await page.getByRole("button", { name: "Continue to shipping" }).click();
  await page.getByRole("button", { name: "Continue to payment" }).click();
});
