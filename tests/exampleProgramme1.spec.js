import{test,expect} from "@playwright/test";

test("My frirst test",async({page})=> {

    await page.goto("https://www.facebook.com/");

       let title=await page.title();

       console.log("here is the title"+title);

});

test("my second test",async({page})=> {

      await page.goto("https://www.facebook.com/");

         let titlefacebook=  await page.title();
       await expect(page).toHaveTitle(titlefacebook);

       console.log("here is the title"+titlefacebook);



});

test.only("My third test", async ({ page }) => {

   // Step 1: Navigate to a URL
   await page.goto("https://www.facebook.com/");

   // Step 2: Get page title
   let title = await page.title();

   // Step 3: Print title in console
   console.log("Page title :", title);

});

// 🔹 1. Run all tests
// npx playwright test

// 🔹 2. Run a specific test file
// npx playwright test tests/example.spec.js

// 🔹 3. Run tests in headed mode (browser visible)
// npx playwright test --headed


// 🔹 3. Install Playwright
// npm init playwright@latest




