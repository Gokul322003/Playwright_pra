import { test } from "@playwright/test"

test ("extract test", async ({ browser }) => {
    const context = await browser.newContext();
    const pagel = await context.newPage();
    const frstname = pagel.locator("input#firstName")
    const lastname = pagel.locator("//input[@id='lastName']");
    const email =  pagel.locator("//input[@id='userEmail']");
    const phn =  pagel.locator("//input[@id='userMobile']");
    const pass =pagel.locator("input[formcontrolname='userPassword']")
    const confrmpass = pagel.locator("input[formcontrolname='confirmPassword']")
    const occup = pagel.locator("select[formcontrolname='occupation']")
    const gender =pagel.locator("//input[@value='Male']")
    const check = pagel.locator("//input[@type='checkbox']")
    const registeer = pagel.locator("//input[@id ='login']")
    const login = pagel.locator("//button[@tabindex='0']")
    await pagel.goto("https://rahulshettyacademy.com/client/");
    // await pagel.locator("//a[@class='text-reset']").click();
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
    await pagel.waitForLoadState('networkidle')
    await pagel.locator(".card-body b").first().waitFor()
    const title = await pagel.locator(".card-body b").allTextContents();
    console.log(title);
    await pagel.waitForTimeout(4000);
  
    
        
    



    
    
})
