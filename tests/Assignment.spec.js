/* 
Q21.&Q22 . Write a Playwright program that: 
 1) Opens https://the-internet.herokuapp.com/javascript_alerts Clicks the JavaScript Alert button.
  2)Accepts the alert.
   3)Validates the success message displayed on the page.
   4)Clicks the JavaScript Prompt button. 
   5)Enters the text "Playwright Automation"  
*/
import{test,expect} from "@playwright/test";

test("alert code",async({page})=>{
     //############## code for  js alert################################
await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
page.once("dialog",async dailog =>{
         console.log(dailog.type());
          const message = dailog.message();
          console.log('alert message 1',message);
          await expect(message).toBe("I am a JS Alert");
          dailog.accept();
})
  await page.locator('//button[@onclick="jsAlert()"]').click();
  await page.waitForTimeout(3000);
  const result =await page.locator('#result');
  await expect(result).toHaveText("You successfully clicked an alert");
  await page.screenshot({path:"Screenshoots/AssignmentAlert.png"});
  //############## code for Confirm js alert################################
    await page.waitForTimeout(3000);
    page.once("dialog",async dailog =>{
         console.log(dailog.type());
          const message1 = dailog.message();
          console.log('alert message 2',message1);
          await expect(message1).toBe("I am a JS Confirm");
          dailog.dismiss();
})
  await page.locator('//button[@onclick="jsConfirm()"]').click();
   await page.waitForTimeout(3000);
  const result1 =await page.locator('#result');
  await expect(result1).toHaveText("You clicked: Cancel");
  //############## code for  js alert################################
  await page.waitForTimeout(3000);
    page.once("dialog",async dailog =>{
         console.log(dailog.type());
          const message2 = dailog.message();
          console.log('alert message 3',message2);
          await expect(message2).toBe("I am a JS prompt");
          dailog.accept("Playwright Testing");  
})
await page.locator('//button[@onclick="jsPrompt()"]').click();
   await page.waitForTimeout(3000);
  const result2 =await page.locator('#result');
  await expect(result2).toHaveText("You entered: Playwright Testing");
})

/* Q23. Write a Playwright program that:  
1) Opens https://playwright.dev 
2)Captures a Full Page Screenshot named:w playright-home.png 
3)  Captures an Element Screenshot of the top navigation bar named: nav-bar.png
 4)Validates that the page title contains Playwright. */

 test("screenshoot",async({page})=>{
        await page.goto("https://playwright.dev/");
        await page.screenshot({path:"Screenshoots/playright-home.png",fullPage:true})
        await page.waitForTimeout(3000);
      const navBar = await page.locator('.theme-layout-navbar');
      await navBar.screenshot({path:"Screenshoots/nav-bar.png"});
        await page.waitForTimeout(3000);
        await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
    })

/*       

Q24. Write a Playwright program that: 
1.Opens https://the-internet.herokuapp.com/iframe
 2. Switches to the iframe. 
 3. Clears the existing text.
 4. Types: Automation using Playwright iframe handling
 5. Validates the entered text.
*/

test("Handle Iframe", async ({ page }) => {

    // 1. Open Website
    await page.goto("https://the-internet.herokuapp.com/iframe");

    // 2. Switch to iframe
    const frame = page.frameLocator("#mce_0_ifr");

    // 3. Locate the editor inside the iframe
    const editor = frame.locator("#tinymce");

    // 4. Clear the existing text
    await editor.clear();

    // 5. Enter new text
    await editor.fill("Automation using Playwright iframe handling");

    // 6. Validate the entered text
    await expect(editor).toHaveText("Automation using Playwright iframe handling");

    // Optional Screenshot
    await page.screenshot({
        path: "Screenshots/IframeHandling.png",
        fullPage: true
    });

    await page.waitForTimeout(3000);
});
/*
Q25. Write a Playwright program that: 
1.Opens https://the-internet.herokuapp.com/dropdown 
2.Selects Option 2 using selectOption(). 
3.Validates: ◦ 1)Selected value is 2  2)Selected visible text is Option 2 
4. Prints all dropdown options to the console. 
*/

test.only("Handle dropdown", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
    const selectionbox=await page.locator('#dropdown');
       const options = selectionbox.locator("option");
        const count =await options.count();
         console.log("Total Options:", count);
          for (let i = 0; i < count; i++) {
        console.log(await options.nth(i).textContent());
    }
       await selectionbox.selectOption("2");
       await expect(selectionbox).toHaveValue("2");
        const selectedText = await selectionbox
        .locator("option:checked")
        .textContent();
    console.log("Selected Text:", selectedText);

    expect(selectedText?.trim()).toBe("Option 2");

    await page.waitForTimeout(3000);
})