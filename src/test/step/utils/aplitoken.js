import { test, expect, request } from "@playwright/test";

class logintoken {
    payloaddatalogin = { userEmail: "gokulrajclg322003@gmail.com", userPassword: "Gokul@322003" };

    async getToken() {
        const context = await request.newContext();
        const pagedata = await context.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: this.payloaddatalogin
        });
        expect(pagedata.ok()).toBeTruthy();
        const jsondata = await pagedata.json();
        const token = jsondata.token;
        return token;
    }
}

export default logintoken;