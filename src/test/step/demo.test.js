import {test} from "@playwright/test"
import logintoken from "./utils/aplitoken"

test("demo", async({page})=>{
  
      const token =new logintoken();
      const tokendata = await token.getToken();
      console.log(tokendata);
}
    )