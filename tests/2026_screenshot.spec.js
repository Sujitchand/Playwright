import{test,expect} from "@playwright/test";
import path from "node:path";

//screen
const baseurl="https://www.facebook.com/"
test("screenshoot page1",async({page})=>{
    await page.goto(baseurl);
   await page.screenshot({path:"Screenshoots/facebookfull.png"});
    console.log("screenshoot succefully done ");
})


  test("screenshoot page2",async({page})=>{
    await page.goto(baseurl);
    await page.screenshot({path:"Screenshoots/fullfacebook.png",fullPage:true})
    console.log("screenshoot succefully done ");
  })

  test.only("screenshot perticular element",async({page})=>{
     await page.goto(baseurl);
      const logo=page.locator('//div[@class="x106a9eq"]');
      await logo.screenshot({path:"Screenshoots/facebooklogo.png"});
     console.log("screenshoot succefully done ");

  })