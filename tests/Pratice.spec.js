import {test,expect} from "@playwright/test";
import path, { dirname } from "node:path";
test("JS Alert",async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

        page.on("dialog",async(dialog)=>{
               const alertType = dialog.type();
               console.log("alertType is:,",alertType);
                const alertmessage=  dialog.message();
                console.log('alertmessage is:'.alertmessage);
                expect(alertmessage).toBe("I am a JS Alert");
                await dialog.accept();
        })
        await page.locator('//button[@onclick="jsAlert()"]').click();
        await page.waitForTimeout(3000);
        await expect(page.locator('#result')).toHaveText("You successfully clicked an alert");
})

test("click for js confirm",async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
        page.on("dialog",async(dialog)=>{
                const type=dialog.type();
                console.log("alert type is:",type);
                const message= dialog.message();
        console.log("alert message is",message);
        expect(message).toBe("I am a JS Confirm");
        await dialog.accept();
        })
        await page.locator('//button[@onclick="jsConfirm()"]').click();
        await page.waitForTimeout(3000);
        await expect(page.locator('#result')).toHaveText("You clicked: Ok");

})


test("window handling",async({page})=>{
        await page.goto("https://demo.automationtesting.in/Windows.html");
        await page.locator('//a[contains(text(),"Open New Tabbed Windows ")]');
        const[newPage]= await Promise.all([
                page.context().waitForEvent("page"),
                page.locator('//button[contains(text(),"    click   ")]').click()
        ]);
           await newPage.waitForLoadState();
           await page.waitForTimeout(4000)
        const documnet =  await newPage.locator('//span[contains(text(),"Documentation")]');
        expect(documnet).toHaveText("Documentation");
         console.log("sucussfully ");
})

test("sperate window handling",async({page})=>{
       await page.goto("https://demo.automationtesting.in/Windows.html");
        await page.locator('//a[contains(text(),"Open New Seperate Windows")]').click();

        const[newPage]=await Promise.all([
           page.context().waitForEvent("page"),
          page.locator('//button[@onclick="newwindow()"]').click(),
        ]);
   await newPage.waitForLoadState('domcontentloaded');
         await page.waitForTimeout(4000);
         const newmessage= newPage.locator('//span[contains(text(),"Documentation")]');
         expect(newmessage).toHaveText('Documentation');
        console.log("sucussfully ");
})

//screenshott fullpage

test("Full page screenshoot",async({page})=>{
        await page.goto('https://www.flipkart.com/');
        await page.screenshot({path:"Screenshoot/fullpage.png",fullPage:true})
        console.log("screen shoot capture succcesfully");
})
//screenshott page
test("screenshoot only",async({page})=>{
                await page.goto("https://www.flipkart.com/");
                await page.screenshot({path:"Screenshoot/pagescreen.png"});
                 console.log("screen shoot capture succcesfully");
})
//screenshott perticular element 
test("perticular element",async({page})=>{
        await page.goto('https://www.flipkart.com/');
        const locator = page.locator('.FO_kXv').first();
        locator.screenshot({path:"Screenshoot/navigateelement.png"});

})

// Topic no 4)  navogation--> 1)goBack,2)goForward,3)reload
test("navigation test",async({page})=>{
        await page.goto('https://www.flipkart.com/');
        await page.locator('//div[contains(text(),"Mobiles")]').first().click();
        await page.goBack();
        await page.waitForTimeout(2000);
        await page.goForward();
        await page.waitForTimeout(2000);
        await page.reload();
        await page.waitForTimeout(2000);
})
// Topic no 5) fileUpload
test("file upload",async({page})=>{

        await page.goto("https://the-internet.herokuapp.com/upload");
        const filepath = path.join(__dirname,"../Screenshots/Playwright_Interview_Prep_TWJ.pdf");
        console.log("dirname",dirname);
        console.log("filePath",filepath);
        await page.locator('#file-upload').setInputFiles(filepath);
        await page.locator('#file-submit').click();
        expect(page.locator('h3')).toHaveText('File Uploaded!');
        console.log('upload succusfully');

})
//6)download
test("download",async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/download');
        const [download]=await Promise.all([
                page.waitForEvent('download'),
                page.locator('//a[contains(text(),"Playwright_Interview_Prep_TWJ.pdf")]'),
        ]);
                     const filename =  download.suggestedFilename();
                     console.log(filename);
                        
})

test.only('wsfxglobalpay landing page', async ({ page }) => {
  await page.goto('https://www.wsfxglobalpay.com/');
  await page.locator('button.header-customer-login').click(); //loginbutton click
  const modal = page.locator('.modal.show');
  await expect(modal).toBeVisible();
  await modal.locator('#signUpNewCustomer').click(); // Signup
  // Mobile number
  const mobile = modal.locator('#phoneNumberSignupHome');
  await mobile.click();
  await mobile.fill('8600367637');
  await mobile.press('Tab'); // trigger blur event
 const checkbox = modal.locator('#loginTermCond');
await expect(checkbox).toBeAttached();// Wait until checkbox is attached
await checkbox.evaluate((el) => {
  el.checked = true;
  el.dispatchEvent(new Event('change', { bubbles: true }));// Check using JavaScript
});
await expect(checkbox).toBeChecked();// Verify
await modal.locator('#loginRegPopProceed').click();// Click Proceed
await page.waitForTimeout(2000);

const emailField = modal.locator('#logRegEmail');
await expect(emailField).toBeVisible();
await emailField.fill('chandsujit3029@gmail.com');// Enter email
await modal.locator('#loginRegPopProceed').click();// Click Proceed
await page.waitForTimeout(2000);
});