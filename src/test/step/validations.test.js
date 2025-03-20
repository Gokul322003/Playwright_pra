import {test,expect} from "@playwright/test"

test("validations and popups", async({page})=>
{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.goto("https://google.com");
await page.goBack();
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
page.on('dialog',dialog=>dialog.accept());                //for calcel we use dismis

await page.locator("#confirmbtn").click();
await page.locator("#mousehover").hover();








})