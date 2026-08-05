import{test,expect} from "@playwright/test";
import { OragneHrm3Login } from "../Page/OragneHrm3Login";

test("LoginOrangeHRm",async({page})=>{

          const LoginPage= new OragneHrm3Login(page);
             LoginPage.goto();
             LoginPage.LoginHRM("Admin","admin123");

});
 