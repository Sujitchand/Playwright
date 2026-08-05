//1) iFrame code
//2) permissionpopoup
//3) AllFrames
//4) screenshoot
//5) alert


import{test,expect} from "@playwright/test";

//1) iFrame code
test("IframeCode",async({page})=>{
  await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst");
        const frame = await page.frameLocator('#iframeResult');
       await frame.locator('//button[@type="button"]').click();
         console.log("click succusfully on eye");
         await page.waitForTimeout(5000);
         await page.locator('#tryhome').click();
})

//2) permissionpopoup

test("permissionpop",async({browser})=>{
           const context= await browser.newContext({permissions:['notifications','geolocation','microphone','camera']});
           const page =await context.newPage();
           await page.goto("https://webcamtests.com/"); 
           await  page.locator('#webcam-launcher').click();
           await page.waitForTimeout(5000);
})

//3) AllFrames

test.only('All Frames', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html');
    const allFrames = page.frames();
    console.log("Total Frames:", allFrames.length);
    for (const frame of allFrames) {
        console.log("Frame URL:", frame.url());
        console.log("Frame Name:", frame.name());
    }
});

//4) screenshoot
//This is full screenshot page
test("second full page screen shoot ",async({page})=>{
   await page.goto('https://www.facebook.com/login/?locale=en_GB');
   await page.screenshot({path:"Screenshoots/facebook1234Full.png",fullPage:true});
    console.log("screenshot capture succeusfully");

})
//5) alert 

test ("second alert",async({page})=>{
await page.goto(baseUrl);
//listeners before the click 
page.on("dialog",async dialog =>{
  const dialogText=dialog.message();
  console.log("alert message",dialogText);
   expect(dialogText).toBe("I am a JS Confirm");
    await dialog.dismiss();
})
await page.locator('//button[@onclick="jsConfirm()"]').click();
console.log("Before wait");
await page.waitForTimeout(5000);
console.log("After wait");
let msg=await page.locator('#result');
await expect(msg).toHaveText("You clicked: Cancel");
})