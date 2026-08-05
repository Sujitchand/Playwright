import{test,expect} from "@playwright/test";

test("iFrame handing",async({page})=>{
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst");
    const frame=await page.frameLocator('#iframeResult');
    await frame.locator('//button[@type="button"]').click();
    console.log("iframe button clicked succesfully");
    await page.locator('#tryhome').click();
    await page.waitForTimeout(5000);    
})

test("iframehanding2",async({page})=>{
       await page.goto("https://demo.automationtesting.in/Frames.html");
      const frame= await page.frameLocator('#singleframe');
      await frame.locator('//input[@type="text"]').fill("playwright");
          await page.waitForTimeout(5000);
      console.log("playwright text fill in the input filed");
      await page.locator("//a[text()='SwitchTo']").click();
      await page.waitForTimeout(5000);
     console.log("switchTo button clicked");

})

test("basicAuth",async({page})=>{
      await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
      await expect(page.locator("//p[contains(text(),'Congratulations!')]")).toContainText("Congratulations");
      await page.waitForTimeout(5000);  
      console.log("succesfully done");      

})
//code for the permisson popup in the broswer
test("handle permisson popup",async({browser})=>{
         const context =await browser.newContext({permissions: ['geolocation', 'camera', 'microphone']});
        const page= await context.newPage();
        await page.goto("https://www.hdfcbank.com/");
        await page.waitForTimeout(5000);
})

 test.only("persmission popup1",async({browser})=>{
      const context= await browser.newContext({permissions:['camera','geolocation','microphone']});
     // const context =await browser.newContext({permissions: ['geolocation', 'camera', 'microphone']});
       const page= await  context.newPage();
        await page.goto('https://www.hdfcbank.com/');
        await page.waitForTimeout(5000);
        console.log("persiions done ");

  })