import{test ,expect} from "@playwright/test";

test("xpath by the attributes",async({page})=>{

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('//input[@name="username"]').fill("Admin");   
    await page.locator('//input[@placeholder="Password"]').fill("admin123");
    await page.waitForTimeout(3000);
    await page.locator('//button[@type="submit"]').click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await page.waitForTimeout(3000);
})

test.only(" xpath by attribute for the facebook login page",async({page})=>{
      await page.goto('https://www.facebook.com/login/');

      await page.locator('//input[@autocomplete="username webauthn"]').fill("Test@gmail.com");
      await page.locator('//input[@type="password"]').fill("Test@1234");
       await page.waitForTimeout(3000);
      await page.locator('//span[text()="Log in"]').click();


})