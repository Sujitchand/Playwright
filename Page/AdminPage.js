import { expect } from "@playwright/test";
import { BasePage } from "../BasePage/BasePage";

export class AdminPage extends BasePage{

        constructor(page){
            super(page);
            this.pageTitle =  page.locator('.oxd-topbar-header-breadcrumb h6').first();
            this.searchBox=  page.locator('input.oxd-input').first();

        }

        async  verifyAdminPage(){
            await expect(this.pageTitle).toHaveText('Admin');
        }

        async serachUser(username){
            await this.type(this.searchBox,username)
        }



}