import{test,expect} from "@playwright/test";

//This is the page screenshoot 
//const baseURL=" ";
test("First page screenshot",async({page})=>{
    await page.goto('https://www.facebook.com/login/?locale=en_GB');
    await page.screenshot({ path:"Screenshoots/Facebook_123.png"});
    console.log("screenshot capture succeusfully");


})
//This is full screenshot page
test("second full page screen shoot ",async({page})=>{
   await page.goto('https://www.facebook.com/login/?locale=en_GB');
   await page.screenshot({path:"Screenshoots/facebook1234Full.png",fullPage:true});
    console.log("screenshot capture succeusfully");

})

//this is the particular part screenshoot

test("third small part screenshoot",async({page})=>{
    await page.goto('https://www.facebook.com/login/?locale=en_GB');
    const logo = await page.locator('//div[@class="x106a9eq"]');
    await logo.screenshot({path:"Screenshoots/facebooklogo.png"});
     console.log("screenshot capture succeusfully");
})
  const baseUrl="https://the-internet.herokuapp.com/javascript_alerts";

test("first alert",async({page})=>{
await page.goto(baseUrl);
//listeners before the click 
page.on("dialog",async dialog =>{
  const dialogText=dialog.message();
  console.log("alert message",dialogText);
   expect(dialogText).toBe("I am a JS Alert");
    await dialog.accept();
})
await page.locator('//button[@onclick="jsAlert()"]').click();
console.log("Before wait");
await page.waitForTimeout(5000);
console.log("After wait");
let msg=await page.locator('#result');
await expect(msg).toHaveText("You successfully clicked an alert");


})



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


test("thidr click on js prompot ",async({page})=>{
     await page.goto(baseUrl);

        page.on("dialog",async dialog=>{
               let msg =dialog.message();
                 console.log("alert message",msg);
               await expect(msg).toBe('I am a JS prompt');
                 await dialog.accept("palyeright testing ");

        })

       await page.locator('//button[@onclick="jsPrompt()"]').click();
       await page.waitForTimeout(5000);
       let messages= page.locator('#result');
       await expect(messages).toHaveText("You entered: palyeright testing");
    

})

test.only("js prompt",async({page})=>{

  await page.goto(baseUrl);
    page.on("dialog",async dialog =>{
     let msg=  dialog.message();
      console.log("alert message",msg);
     await expect(msg).toBe('I am a JS prompt');
     dialog.accept(" null");

    })

  await page.locator('//button[@onclick="jsPrompt()"]').click();
  await page.waitForTimeout(5000);
     let message=page.locator('#result');
    await expect(message).toHaveText("You entered: null");

})