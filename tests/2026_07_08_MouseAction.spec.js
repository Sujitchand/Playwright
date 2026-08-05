/*1) Single Click 
 2) Double Click 
 3)Right Click (Context Click)
 4)Mouse Hover 
 5)Drag and Drop 
 6)Mouse Move 
 7)Mouse Wheel (Scroll) 
 8)Click and Hold 
 
 */





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

//5 drag and droop

test.only("Drag and Drop Action", async ({ page }) => {

    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/");

    const frame=await page.frameLocator('iframe.demo-frame').first();
   const source= frame.locator('//img[@alt="The chalet at the Green mountain lake"]');
    const target=frame.locator('#trash');
    await source.dragTo(target);
    await page.waitForTimeout(5000);

    await page.screenshot({
        path: "Screenshots/dragdrop.png"
    });

});

test("Right click example",async({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");
    const rightclik=await page.locator('//span[contains(text(),"right click me")]');
    await expect(rightclik).toBeVisible();
    //await rightclik.click();   //it will not work right click
    await rightclik.click({button:"right"});
     await page.waitForTimeout(5000);
   const contextMenu=  await page.locator('.context-menu-list');
 await expect(contextMenu).toBeVisible();
  const menuItems= contextMenu.locator('li');
  let count=await menuItems.count();
  console.log(count);
  for(let i=0;i<count;i++){
    console.log(await menuItems.nth(i).innerText());
  }
  page.on("dialog",async dialog =>{
       const message= dialog.message();
       console.log("edit message",message);
        await expect(message).toBe("clicked: edit");
        await dialog.accept();
  })
  await page.locator('//span[contains(text(),"Edit")]').click();
   await page.waitForTimeout(4000);
})