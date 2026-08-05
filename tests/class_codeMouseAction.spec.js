import{test,expect} from "@playwright/test";

const baseURl= "https://demoqa.com/buttons";
//1 single click
test("single click action",async({page})=>{
    await page.goto(baseURl);
    await page.waitForTimeout(3000);
    await page.locator('//button[text()="Click Me"]').click();
   
})

//2. Double Click
test("dobule click action",async({page})=>{
        await page.goto(baseURl);
          await page.waitForTimeout(3000);
        await page.locator('//button[text()="Double Click Me"]').dblclick();
        await page.waitForTimeout(3000);
        await page.screenshot({path:"Screenshoots/doubleclick.png"});


})


//3. Right Click (Context Click)
test("right click action",async({page})=>{
      await page.goto(baseURl);
          await page.waitForTimeout(3000);
      await page.locator('//button[text()="Right Click Me"]').click({button:"right"});
})

//4. Mouse Hover

test("hover action ",async({page})=>{
   await page.goto("https://www.amazon.in/");
   await page.locator('#nav-link-accountList').hover();
   await page.waitForTimeout(5000);
   await page.screenshot({path:"Screenshoots/amagezonHover.png"});

})

test("right click action1",async({page})=>{
     await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    const rightclick= await page.locator('//span[text()="right click me"]');
    await expect(rightclick).toBeVisible();
     rightclick.click({button:"right"});
     await page.waitForTimeout(5000);
    const contextMenu=  await page.locator('.context-menu-list');
    await expect(contextMenu).toBeVisible();
     const menulist=  contextMenu.locator('li');
      const menucount=  await menulist.count();
      console.log('count',menucount);
     const Thirdvalue = await menulist.nth(3).innerText();
     console.log("This is the third index----->",Thirdvalue);
      for(let i=0;i<menucount;i++){
        console.log(await menulist.nth(i).innerText());
      }

      page.on("dialog",async dialog =>{
           const type  =await  dialog.type();
           console.log('alert type',type);
        const messageContext  =dialog.message();
         console.log(messageContext);
         await expect(messageContext).toBe("clicked: edit");
            dialog.accept();
      })

      await page.locator('//span[text()="Edit"]').click();
      await page.waitForTimeout(5000);
})

test("double click",async({page})=>{
await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
const doubleclick=await page.locator('//button[@ondblclick="myFunction()"]');
await expect(doubleclick).toBeVisible();
 page.on("dialog",async dialog =>{
           const type  =await  dialog.type();
           console.log('alert type',type);
        const messageContext  =dialog.message();
         console.log(messageContext);
         await expect(messageContext).toBe("You double clicked me.. Thank You..");
            dialog.accept();
      })
   doubleclick.dblclick();
  await page.waitForTimeout(5000);

})

test.only("dragdoop click",async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");
    const frame= await page .frameLocator('//iframe[@class="demo-frame"]').first();
   const dragImg  = await frame.locator('//img[@alt="On top of Kozi kopka"]');
     const  dopImge = await frame.locator('#trash');
           await  dragImg.dragTo(dopImge);
           await page.waitForTimeout(5000);
    })