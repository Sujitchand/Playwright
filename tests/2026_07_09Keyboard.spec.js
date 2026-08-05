
/*###############Keyboard actions:-####################
in Playwright are used to simulate user interactions with the keyboard,
 such as typing text, pressing Enter, Tab navigation, using arrow keys,
  and executing keyboard shortcuts like Ctrl+A, Ctrl+C, and Ctrl+V.

We can perform keyboard actions in two ways:

locator.press(): Used for element-specific key presses.

page.keyboard: Used for global keyboard interactions and advanced operations.*/

import{test,expect} from "@playwright/test";

test("keyboard actions",async({page})=>{
       await page.goto("https://www.facebook.com/login/?locale=en_GB");

      const input1= await page.locator('//input[@name="email"]');
      const input2= await page.locator('//input[@name="pass"]');

      await input1.fill("0011sujitchand@gmail.com");
       await page.waitForTimeout(3000);
      await input1.press("Control+A");
      await input1.press("Control+C");
       await input1.press("Tab");
         await page.keyboard.press("Control+V");
          await page.waitForTimeout(3000);
          await input2.click();
          await  page.keyboard.press("Control+A");
           await page.keyboard.press("Delete");
           await page.waitForTimeout(3000);
          //console.log(await expect(input2).toBeEmpty()) ;
    const   emailText = await input1.inputValue();
    const   passText = await input2.inputValue();
     console.log("Password after delete:", passText);
     
    //  console.log("Password :", passText); 
    //  console.log(passText);

    // await expect(passText).toBe(emailText);
    await page.waitForTimeout(3000);


})

test("Keyboard Actions Example", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

          const name=await page.locator("#name");
           await name.click();
          name.fill("Sujit123");
          await page.keyboard.press("ArrowLeft");
         await page.keyboard.press("ArrowRight");
         await page.keyboard.press("Backspace");
         await page.keyboard.press("Enter");
        await page.waitForTimeout(3000);

    });


   // import{test,expect} from '@playwright/test';

    test.only("facebook key",async({page})=>{
        await page.goto("https://www.facebook.com/login/?locale=en_GB");
        const input1=await page.locator('#m_login_email');
        const input2=await page.locator('#m_login_password');
        const usernametext =input1.fill("sujitchand");
          await usernametext.press("control+A");
        await page.waitForTimeout(5000);
    })
/*
    ```ts
/*
============================ Assertions ============================

Assertion means a verification step where we compare the expected result with the actual result.

- If the expected result matches the actual result, the test case passes.
- If the expected result does not match the actual result, the test case fails.

In Playwright, Hard Assertion is used by default.

Types of Assertions:
1. Hard Assertion
2. Soft Assertion

--------------------------------------------------------------------
1. Hard Assertion
--------------------------------------------------------------------

A Hard Assertion is the default assertion in Playwright. It is written using the expect() method.

If a Hard Assertion fails, the test execution stops immediately, the remaining steps are not executed, and the test is marked as failed.

Example:

import { test, expect } from "@playwright/test";

test("Hard Assertion", async ({ page }) => {

  await page.goto("https://www.facebook.com/");

  // If this assertion fails, the test stops here.
  await expect(page).toHaveTitle("Google");

  console.log("This line will not execute");
});

--------------------------------------------------------------------
2. Soft Assertion
--------------------------------------------------------------------

A Soft Assertion is the opposite of a Hard Assertion. It is written using the expect.soft() method.

If a Soft Assertion fails, the test execution continues, the remaining steps are executed, and after the test completes, Playwright reports the failed assertion.

Example:

import { test, expect } from "@playwright/test";

test("Soft Assertion", async ({ page }) => {

  await page.goto("https://www.facebook.com/");

  // Even if this assertion fails, the test will continue.
  await expect.soft(page).toHaveTitle("Google");

  console.log("This line will execute");

  await expect(page).toHaveURL("https://www.facebook.com/");
});

**===========================Top 15 Playwright Assertion Methods with Purpose===================**

1. **toBe()** – Used to compare two exact values.

2. **toEqual()** – Used to compare objects or arrays.

3. **toContain()** – Used to verify that a string or array contains a specific value.

4. **toBeVisible()** – Used to verify that an element is visible on the web page.

5. **toBeHidden()** – Used to verify that an element is hidden.

6. **toBeEnabled()** – Used to verify that an element is enabled and can be interacted with.

7. **toBeDisabled()** – Used to verify that an element is disabled.

8. **toBeChecked()** – Used to verify that a checkbox or radio button is selected.

9. **toHaveText()** – Used to verify the exact text of an element.

10. **toContainText()** – Used to verify that an element contains a specific text.

11. **toHaveValue()** – Used to verify the value of an input field.

12. **toHaveAttribute()** – Used to verify that an element has a specific attribute and value.

13. **toHaveCount()** – Used to verify the total number of matching elements.

14. **toHaveTitle()** – Used to verify the title of the current web page.

15. **toHaveURL()** – Used to verify the URL of the current web page.

*/



test("Playwright Assertions Demo", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  // 1. toHaveTitle()
  await expect(page).toHaveTitle("Automation Testing Practice");

  // 2. toHaveURL()
  await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

  // 3. toBeVisible()
  const name = page.locator("#name");
  await expect(name).toBeVisible();

  // 4. toBeEnabled()
  await expect(name).toBeEnabled();

  // 5. toHaveAttribute()
  await expect(name).toHaveAttribute("type", "text");

  // 6. toHaveValue()
  await name.fill("Sujit");
  await expect(name).toHaveValue("Sujit");

  // 7. toBeChecked()
  const male = page.locator("#male");
  await male.check();
  await expect(male).toBeChecked();

  // 8. toBeDisabled()
  // Example (works only if the element is actually disabled)
  // await expect(page.locator("#disabledButton")).toBeDisabled();

  // 9. toHaveText()
  await expect(page.locator("h1")).toHaveText("Automation Testing Practice");

  // 10. toContainText()
  await expect(page.locator("h1")).toContainText("Automation");

  // 11. toHaveCount()
 // await expect(page.locator("input")).toHaveCount(9);

  // ---------------- Generic Assertions ----------------

  // 12. toBe()
  expect(100).toBe(100);

  // 13. toEqual()
  expect(["Java", "Playwright"]).toEqual(["Java", "Playwright"]);

  // 14. toContain()
  expect("Playwright Automation").toContain("Automation");

  // 15. toBeTruthy()
  expect(true).toBeTruthy();

});

