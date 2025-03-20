// in inspect we can identify by iframe or frameset

import {test} from "@playwright/test"

test("iframe", async({page})=>
{

    page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const frame = page.frameLocator("#courses-iframe");
    await frame.getByRole("link",{name:"lifetime-access"}).click();
    const text = await frame.locator(".text h2").textContent();
    console.log(text.split(" ")[1]);
    
    


})