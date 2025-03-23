import { test } from "@playwright/test"

test ("extract test", async ({ page }) => {
    // const context = await browser.newContext();
    // const pagel = await context.newPage();
    const frstname =  page.locator("input#firstName")
    const lastname =  page.locator("//input[@id='lastName']");
    const email =   page.locator("//input[@id='userEmail']");
    const phn =   page.locator("//input[@id='userMobile']");
    const pass = page.locator("input[formcontrolname='userPassword']")
    const confrmpass =  page.locator("input[formcontrolname='confirmPassword']")
    const occup =  page.locator("select[formcontrolname='occupation']")
    const gender = page.locator("//input[@value='Male']")
    const check =  page.locator("//input[@type='checkbox']")
    const registeer =  page.locator("//input[@id ='login']")
    const login =  page.locator("//button[@tabindex='0']")
    await  page.goto("https://rahulshettyacademy.com/client/");
    // await  page.locator("//a[@class='text-reset']").click();
//    await frstname.type("Gokul");
//    await lastname.type("Raj B");
//    await email.type("gokulbra@gmail.com");
//    await phn.type("9791711853");
//    await pass.type("Gokul@322003");
//    await confrmpass.type("Gokul@322003")
//    await gender.click();
//     await occup.selectOption('3: Engineer');
//     await check.check();
//     await registeer.click();
//     await login.click();
    await email.type("gokulbra@gmail.com");
    await pass.type("Gokul@322003");
    await registeer.click();
    await  page.waitForLoadState('networkidle')
    await  page.locator(".card-body b").first().waitFor()
    const title = await  page.locator(".card-body b").allTextContents();
    console.log(title);
    await  page.waitForTimeout(4000);
  
    
        
    



    
    
})
