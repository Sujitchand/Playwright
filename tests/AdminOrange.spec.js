import{test,expect} from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";
import { AdminPage } from "../Page/AdminPage";

test("AdminPage",async({page})=>{

    const adminpage= new AdminPage(page);
        adminpage.verifyAdminPage();
        const username = "Admin";
        adminpage.serachUser(username);
})