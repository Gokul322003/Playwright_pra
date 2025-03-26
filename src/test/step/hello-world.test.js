import { test, expect, request } from "@playwright/test";

const payloaddatalogin = { userEmail: "gokulrajclg322003@gmail.com", userPassword: "Gokul@322003" };
const orderpayload = { country: "India", productOrderedId: "67a8dde5c0d3e6622a297cc8" };
let token;
let orderid;

test.beforeAll(async () => {
    const context = await request.newContext();
    const pagedata = await context.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
        data: payloaddatalogin
    });
    expect(pagedata.ok()).toBeTruthy();
    const jsondata = await pagedata.json();
    token = jsondata.token;
    console.log(token);
    const orderdata = await context.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
        data: orderpayload,
        headers: {
            'Authorization': `Bearer ${token}`,  // Add 'Bearer ' prefix to token if required
            'Content-Type': 'application/json'
        }
    });
    const orderjsondata = await orderdata.json();
    orderid = orderjsondata.orders;
    console.log(orderjsondata);
    const statusj = orderdata.status();
    console.log(orderdata)
});

test("webapi order check", async ({ page }) => {
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);
    await page.goto("https://rahulshettyacademy.com/client/");
});