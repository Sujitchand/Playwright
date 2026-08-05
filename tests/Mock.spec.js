import{test,expect} from "@playwright/test";

test("screenshoot1" ,async({page})=>{
   await page.goto("https://www.facebook.com/");
   await page.screenshot({path:" Screenshoots/fullpagescreen.png",fullPage:true});
   console.log("screenshoot capture succfully ");


})