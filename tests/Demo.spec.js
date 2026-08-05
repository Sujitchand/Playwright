import{test,expect} from '@playwright/test';

    test.only("facebook key",async({page})=>{
        await page.goto("https://www.facebook.com/login/?locale=en_GB");
        const input1=await page.locator('//input[@name="email"]');
        const input2=await page.locator('//input[@name="pass"]');
        const usernametext = await input1.fill("sujitchand");
          await input1.press("Control+A");
          await input1.press("Control+C");
          await input1.press("Tab");
        await input2.press("Control+V");
        await page.waitForTimeout(5000);
    })