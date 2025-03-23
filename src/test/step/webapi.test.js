import {test,expect,request} from "@playwright/test"
let webtoken;
const payloddata ={userEmail: "gokulbra@gmail.com", userPassword: "Gokul@322003"}

test.beforeAll(async()=>{
    const context =await request.newContext();
    const pageurl = await context.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {
        data:payloddata
    });
    expect(pageurl.ok()).toBeTruthy();
    const jsondata =await pageurl.json();
    webtoken = jsondata.token;
    console.log(webtoken)

})

test ("webapi test", async({page})=>{
    page.addInitScript(value=>{
        window.localStorage.setItem('token',value)
    }, webtoken );
    await  page.goto("https://rahulshettyacademy.com/client/");
    await page.locator(".fa-handshake-o").click();
 
    const locatorc =await page.locator("button.btn-danger")
    await page.waitForLoadState("networkidle")
    const count = await locatorc.count();
    console.log(count);
  

    

})

