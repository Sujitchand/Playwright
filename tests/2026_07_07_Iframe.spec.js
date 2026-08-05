import{test,expect} from "@playwright/test";

test("test handle nested frame",async({page})=>{
      await page.goto("https://demo.automationtesting.in/Frames.html");
      await page.locator('//a[contains(text(),"Iframe with in an Iframe")]').click();
       const outerElement  = page.locator("//div[@id='Multiple']/iframe");
        const  outerFrame =  await outerElement.contentFrame();
        const outertext  = await outerFrame.locator('//h5[contains(text(),"Nested iFrames")]').textContent();
        console.log('outertext',outertext);

            const innerFrameElement = outerFrame.locator('iframe');
            const  innerFrame = await innerFrameElement.contentFrame();
            await innerFrame.locator('//input[@type="text"]').fill("javascript");
            console.log("Text entered inside Inner Frame"); 
            await page.locator("//a[contains(text(),'Home')]").click(); 
            await page.waitForTimeout(5000);

})

test("nested iframe",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    await page.locator('//a[contains(text(),"Iframe with in an Iframe")]').click();
    const outerframe   = await page.locator('//div[@id="Multiple"]/iframe');
    const  outerElement  =  outerframe.contentFrame(); //outer frame find 
    await expect(outerElement.locator('//h5[contains(text(),"Nested iFrames")]')).toHaveText("Nested iFrames");

    const innerFrameElement = outerElement.locator('iframe');  //inner frame find keli 
    const inneerFrame  =innerFrameElement.contentFrame();
    inneerFrame.locator('//input[@type="text"]').fill("javascript");
     console.log("Text entered inside Inner Frame"); 
     await page.locator("//a[contains(text(),'Home')]").click(); 
     await page.waitForTimeout(5000);      
})

test.only("nested iframe handling",async({page})=>{
        await page.goto("https://demo.automationtesting.in/Frames.html");
        //outerframe
        await page.locator('//a[contains(text(),"Iframe with in an Iframe")]').click();
         const outerIframe =  page.locator('//div[@id="Multiple"]/iframe');
         const outerElementCont  =outerIframe.contentFrame();
        await expect(outerElementCont.locator('//h5[contains(text(),"Nested iFrames")]')).toHaveText("Nested iFrames");

        //inner frame
      const innerFrame =  outerElementCont.locator('iframe');
      const innerFrameElement  =innerFrame.contentFrame();
         await page.waitForTimeout(2000);
       await innerFrameElement.locator('//input[@type="text"]').fill("javscript"); 
       console.log("Text entered inside Inner Frame"); 
        await page.locator('//a[contains(text(),"Home")]').click();
        await page.waitForTimeout(4000);
})