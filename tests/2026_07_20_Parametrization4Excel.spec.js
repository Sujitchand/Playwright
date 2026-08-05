import {test,expect} from "@playwright/test";
import xlsx from "xlsx";
const workbook = xlsx.readFile("./Screenshots/Excel.xlsx");
   const sheet =  workbook.Sheets("TestData");
  const testData =   xlsx.utils.sheet_to_json(sheet);
for( const user of testData){
test(`Login Test - ${data.username}`, async ({ page }) => {

        // Open Application
        await page.goto("https://www.saucedemo.com/");

        // Enter Username
        await page.locator("#user-name").fill(data.username);

        // Enter Password
        await page.locator("#password").fill(data.password);

        // Click Login Button
        await page.locator("#login-button").click();

        // Validation
        if (data.expectedResult === "success") {

            // Successful Login Validation
            await expect(page.locator(".title")).toHaveText("Products");

            console.log(`✅ Login Successful : ${data.username}`);

        } else {

            // Invalid Login Validation
            await expect(page.locator('[data-test="error"]')).toBeVisible();

            console.log(`❌ Login Failed : ${data.username}`);

        }

    });

}