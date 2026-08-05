import {test,expect} from "@playwright/test";

import userdata from "../Screenshots/testdata2.json";

for(const user1 of userdata){

    test(`Register ${user1.firstName} ${user1.lastname}`,async({page})=>{
            await page.goto("https://demoqa.com/automation-practice-form");
            await page.locator('#firstName').fill(user1.firstName);
            await page.locator('#lastName').fill(user1.lastname);
            await page.locator('#userEmail').fill(user1.eamil);
            await page.locator(`//label[contains(text(),'${user1.gender}')]`).first().click();
            await page.locator('#userNumber').fill(user1.mobileno);
            await page.waitForTimeout(3000);
    });
}