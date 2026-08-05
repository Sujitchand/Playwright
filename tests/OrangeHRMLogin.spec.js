import{test,expect}  from "@playwright/test";
import{OrangeHRMLogin} from "../Page/OrangeHRMLogin"
import { OrangeHrM2Login } from "../Page/OrangeHrM2Login";
test("Login page",async({page})=>{

    const loginPage= new OrangeHRMLogin(page);
    await loginPage.goto();
    await loginPage.login("Admin","admin123");
    await loginPage.verifyDashboard();
})

test.only("login hrm withbasepage",async({page})=>{
     
 const loginPage= new OrangeHrM2Login(page);
        await loginPage.goto();
    await loginPage.login("Admin", "admin123");
    await loginPage.verifyDashboard();

})


