import{test,expect} from "@playwright/test";
import { only } from "node:test";
const BaseUrl="https://the-internet.herokuapp.com/javascript_alerts";
test("click for js confirm ok",async({page})=>{
     await page.goto(BaseUrl);
     page.on("dialog",async dialog =>{
        console.log(dialog.type());
          const messagetext = dialog.message();
          console.log("confir js alert message cancel:",messagetext);
          await expect(messagetext).toBe("I am a JS Confirm");
          await dialog.accept();
     })
     await page.locator('//button[@onclick="jsConfirm()"]').click();
      const result= await page.locator('#result');
      await expect(result).toHaveText("You clicked: Ok");
     await page.waitForTimeout(5000);

})

test("click for js confirm cancel",async({page})=>{
     await page.goto(BaseUrl);
     page.on("dialog",async dialog =>{
        console.log(dialog.type());
          const messagetext = dialog.message();
          console.log("confir js alert message:",messagetext);
          await expect(messagetext).toBe("I am a JS Confirm");
          await dialog.dismiss();
     })
     await page.locator('//button[@onclick="jsConfirm()"]').click();
      const result= await page.locator('#result');
      await expect(result).toHaveText("You clicked: Cancel");
     //await page.waitForTimeout(5000);

})

test.only("click I am a JS prompt",async({page})=>{
     await page.goto(BaseUrl);
     page.on("dialog",async dialog =>{
        console.log(dialog.type());
          const messagetext = dialog.message();
          console.log("confir js alert message:",messagetext);
          await expect(messagetext).toBe("I am a JS prompt");
          await dialog.accept("playwright testing");
     })
     await page.locator('//button[@onclick="jsPrompt()"]').click();
      const result= await page.locator('#result');
      await expect(result).toHaveText("You entered: playwright testing");
     //await page.waitForTimeout(5000);

})