import {test,expect,request} from "@playwright/test";

const payloaddatalogin= {userEmail: "gokulbra@gmail.com", userPassword: "Gokul@322003"}
let token
test.beforeAll(async()=> {
    const context = request.newContext();
    const pagedata = await context.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data :payloaddatalogin

    });
   expect(await pagedata).ok()).toBeTruthy();
    const jsondata = (await pagedata).json();
   token = jsondata.token;
   console.log(token);
   
})
test("webapi order check",async({page})=>
{
    page.addInitScript(value=>{
        window.localStorage.setItem('token',value)
    }, token );
    await  page.goto("https://rahulshettyacademy.com/client/");
    console.log(token);
})