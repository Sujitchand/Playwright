//All topics code for practice
//Topic No 1)Alert  ---1) JS Alert  2)JS Confirm - Accept     3)JS prompt 
//1) JS Alert
import{test,expect}  from "@playwright/test";
import path, { dirname } from "node:path";
  const commonUrl="https://the-internet.herokuapp.com/javascript_alerts";
test("Js alert click",async({page})=>{
      await page.goto(commonUrl);
   
      page.on("dialog",async dialog =>{
            const alertType  = dialog.type();
            console.log("alertType",alertType);
            const alertmessage  = dialog.message();
             console.log(alertmessage);
              expect(alertmessage).toBe("I am a JS Alert");
                 await   dialog.accept();
      })
       await page.locator('//button[@onclick="jsAlert()"]').click();
       await page.waitForTimeout(4000);
    const validateMessage =  page.locator('#result');
      await page.waitForTimeout(2000);
    await expect(validateMessage).toHaveText("You successfully clicked an alert");
   
       
})

//)JS Confirm - cancel

test("js confirm alert",async({page})=>{
        await page.goto(commonUrl);
      
         page.on("dialog",async dialog =>{
            const alertType  = dialog.type();
            console.log("alertType",alertType);
            const alertmessage  = dialog.message();
             console.log(alertmessage);
              expect(alertmessage).toBe("I am a JS Confirm");
                 await   dialog.dismiss();
         })
 await page.locator('//button[@onclick="jsConfirm()"]').click();
       const validateMessage =  page.locator('#result');
        await expect(validateMessage).toHaveText("You clicked: Cancel");
        await page.waitForTimeout(4000);

})
//3)JS prompt 
test("JS Prompt Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on("dialog", async dialog => {

        console.log(dialog.type());      // prompt
        console.log(dialog.message());   // I am a JS prompt

        expect(dialog.type()).toBe("prompt");
        expect(dialog.message()).toBe("I am a JS prompt");

        await dialog.accept("Playwright testing");
    });

    await page.locator('button[onclick="jsPrompt()"]').click();

    await expect(page.locator("#result"))
        .toHaveText("You entered: Playwright testing");
});
console.log("=============================================================================");
//Topic no 2)  window handling  ->1)Open New Tabbed Windows  2)Open New Seperate Windows

//1)Open New Tabbed Windows 
test("window handling",async({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('//a[contains(text(),"Open New Tabbed Windows ")]').click();
    
          const[newPage] = await Promise.all([
                 page.context().waitForEvent("page"),
                 page.locator("//button[contains(text(),'    click   ')]").click()
            ]);

            await newPage.waitForLoadState();
           const doumetiation =await newPage.locator('//span[contains(text(),"Documentation")]');
              await page.waitForTimeout(4000)
           await expect(doumetiation).toHaveText("Documentation");
        
           console.log("sucussfully ");

})
//2)Open New Seperate Windows
test("window handling1",async({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('//a[contains(text(),"Open New Seperate Windows")]').click();
          const[newPage] = await Promise.all([
                 page.context().waitForEvent("page"),
                 page.locator('//button[@onclick="newwindow()"]').click()
            ]);
            await page.waitForLoadState();
           const doumetiation =await newPage.locator('//span[contains(text(),"Documentation")]');
              await page.waitForTimeout(4000)
           await expect(doumetiation).toHaveText("Documentation");
           console.log("sucussfully ");
})

console.log("=============================================================================");
// Topic no 3)ScreenShoot  1)fullpage  2)specific element 

//1)fullpage

test
("Full page Screenshoot",async({page})=>{
        await page.goto("https://www.flipkart.com/");
        await page.screenshot({path:"Screenshoots/Flipcart.png",fullPage:true});
        console.log("screenshot capture succussfully");
})

//2 specific element 
test("Logo page Screenshoot",async({page})=>{
        await page.goto("https://www.flipkart.com/");
       const logo=  page.locator("//*[contains(@class,'_1psv1zee3')]").first();
        await logo.screenshot({path:"Screenshoots/Flipcartlogo.png"});
        await page.waitForTimeout(4000);
        console.log("screenshot capture logo succussfully");
})
console.log("=============================================================================");
// Topic no 4)  navogation--> 1)goBack,2)goForward,3)reload

test("Navigations",async({page})=>{
 await page.goto("https://www.flipkart.com/");
await page.waitForTimeout(4000);
 await page.locator('//div[contains(text(),"Electronics")]').click();
 await page.locator('//img[@src="https://rukminim2.flixcart.com/fk-p-flap/196/196/image/7b06eef569b627dd.png?q=90"]').click();
    await page.goBack();  //back page
    await page.waitForTimeout(4000);  
    await page.goForward(); //nextpage 
    await page.waitForTimeout(2000);
    await page.reload();  //refresh
    await page.waitForTimeout(2000); 
})
// Topic no 4) permissionPopup

test("permissionaPopup",async({browser })=>{
         const context =  await browser.newContext({
                permissions:["camera","geolocation","notifications","microphone"]
            });

           const page =await context.newPage();
           await page.goto("https://webcamtests.com/");
           await page.locator('#webcam-launcher').click();
           await page.waitForTimeout(5000);
           await context.close();
})

// Topic no 5) fileUpload

test("fileUpload",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
   const filepath=  path.join(__dirname,"../Screenshots/Playwright_Interview_Prep_TWJ.pdf");
        console.log("dirname",dirname);
        console.log("filepath",filepath);
        await page.locator('#file-upload').setInputFiles(filepath);
        await page.locator('#file-submit').click();
        const fileupload=await page.locator('h3');
        await expect(fileupload).toHaveText("File Uploaded!");
        await expect(page.locator('#uploaded-files')).toHaveText("Playwright_Interview_Prep_TWJ.pdf");
})

//// Topic no 6) download
test("file download",async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/download");
      const [download] = await Promise.all([
          page.waitForEvent("download"),
          page.locator('//a[contains(text(),"Adobe Scan Jul 17, 2026 (1).pdf")]').click()
        ]);
              const  filename= download.suggestedFilename(); 
              console.log("filename",filename);
              const downloadPath = path.join(__dirname,"..","Downloads",filename);
                await   download.saveAs(downloadPath);
})
// Topic no 7) MouseActions 1. Single Click  2. Double Click 3. Right Click 4. Mouse Hover  5.Drag and Drop

//1. Single Click
const mouseUrl="https://demoqa.com/buttons";
test("single click",async({page})=>{
                await page.goto(mouseUrl);
                await page.waitForTimeout(3000);
                await page.locator('//button[text()="Click Me"]').click();
                await expect(page.locator('#dynamicClickMessage')).toHaveText("You have done a dynamic click");
               
})
//2. Double Click
test("double click",async({page})=>{
        await page.goto(mouseUrl);
        await page.waitForTimeout(4000);
        await page.locator('//button[text()="Double Click Me"]').dblclick();
         await expect(page.locator('#doubleClickMessage')).toHaveText("You have done a double click");
})
//3. Right Click
test("right click",async({page})=>{
        await page.goto(mouseUrl);
        await page.waitForTimeout(4000);
        await page.locator('//button[text()="Right Click Me"]').click({button:"right"});
         await expect(page.locator('#rightClickMessage')).toHaveText("You have done a right click");
})
//4. Mouse Hover
test("Mouse Hover",async({page})=>{
                await page.goto("https://www.amazon.in/");
                  await page.waitForTimeout(2000);
                await page.locator('#nav-link-accountList').hover();
                 await page.waitForTimeout(2000);
})

// 5.Drag and Drop
test("dragdoop click",async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
    const frame= await page .frameLocator('//iframe[@class="demo-frame"]').first();
   const dragImg  = await frame.locator('//img[@alt="On top of Kozi kopka"]');
     const  dopImge = await frame.locator('#trash');
           await  dragImg.dragTo(dopImge);
           await page.waitForTimeout(5000);
    })

// Topic no 8)  keyboard action 

test("keyboard action",async({page})=>{
        await page.goto("https://www.facebook.com/");
       const email=   page.locator('//input[@name="email"]');
        await  email.fill("0011sujitchand@gmail.com");
       await  email.press("Control+A");
       await email.press("Control+C");
       await email.press("Tab");
       const pass=page.locator('//input[@name="pass"]');
        await page.keyboard.press("Control+V");

        await pass.press("Control+A");
         await page.waitForTimeout(2000);
        await page.keyboard.press("Delete");
        await page.waitForTimeout(2000);
         await expect(pass).toHaveValue("");

         await page.goto("https://testautomationpractice.blogspot.com/");
         const name = page.locator("#name");
         await name.fill("Sujit1234");
         await page.waitForTimeout(2000);
         await page.keyboard.press("ArrowLeft");   // Arrow Left
          await page.keyboard.press("ArrowRight");   // Arrow Right
           await page.keyboard.press("Backspace");    // Backspace
           await page.keyboard.press("Enter");       //Enter
           await page.waitForTimeout(2000);
            await page.goto("https://www.google.com/");
    const search = page.locator('[name="q"]');
    await search.fill("Playwright Interview");
    // Escape Key
    await page.keyboard.press("Escape");
    await page.waitForTimeout(3000);

})

//Topic 9- Droopdown

test("flipcart multiple options selct",async({page})=>{

    await page.goto('https://www.flipkart.com/');
       await page.waitForTimeout(4000);
    //await page.locator('//input[@name="q"]').fill("Mobile");
    //search input 
    const mobileInput =  await page.locator('//input[@name="q"]').first();
      await mobileInput.fill('Mobile');
     await expect(mobileInput).toHaveValue("Mobile");
    
    //
    const mobileDroopDown=  page.locator(' //ul[contains(@class,"VCplLH ")]/li');
    await expect(mobileDroopDown.first()).toBeVisible();
    const MobileDroopDowncount  =await  mobileDroopDown.count();
     await page.waitForTimeout(4000);
    console.log("MobileDroopDowncount:", MobileDroopDowncount);

    for (let i = 0; i < MobileDroopDowncount; i++) {
    const text = await mobileDroopDown.nth(i).innerText();
    console.log(`Option ${i + 1}: ${text}`);
   }

    for(let i=0;i<MobileDroopDowncount;i++){ //8 =0<7
      
        const text= await mobileDroopDown.nth(i).innerText();
            console.log(text);
       if(text.includes('mobile 5g')){
            await mobileDroopDown.nth(i).click();
            break;
       }
       
    }

    //await expect(page).toHaveURL('https://www.flipkart.com/search?q=mobile+5g&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_6_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=mobile+5g%7CMobiles&requestId=69c4563b-e8d2-4cbd-8147-334fc364f2f9&as-searchtext=mobile');
      await page.waitForTimeout(4000);
})

//10)Grouupmg and hooks 
     // Runs before all test
    test.beforeAll(async()=>{
        console.log("Before all Test execution started ");

    })
test.beforeEach(async({page})=>{
console.log("befor each test ")
  await page.goto("https://www.saucedemo.com/");

})

test.afterEach(async({page})=>{
console.log("after each test ");
   page.screenshot({path:"Screenshoots/afterImage.png",fullPage:true})
})
    // Runs once after all tests
test.afterAll(async () => {
    console.log("After All - All Tests Completed");
});

test.describe("Login module",()=>{
     
        test("valid login",async({page})=>{
         page.locator('#user-name').fill("standard_user");
         page.locator('#password').fill("secret_sauce");
         page.locator('#login-button').click();
        await  page.waitForTimeout(4000);
        })
         test("Invalid login",async({page})=>{
        page.locator('#user-name').fill("sujit");
         page.locator('#password').fill("secret_sauce");
         page.locator('#login-button').click();
         await page.waitForTimeout(4000);
        })
});

//11)Web Tables (Static + Dynamic)
//12)Frames / iFrame
//13)Checkbox
//14)Radio Button
//15)Tags (@smoke, @sanity, @regression)
//16)Assertions (Hard & Soft)
//17)Browser Context
//18)Static Dropdown (selectOption())
 //19)Locators (CSS, XPath, getByRole, getByText...)

 //import { test } from '@playwright/test';

