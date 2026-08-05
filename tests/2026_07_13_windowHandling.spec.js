import{test ,expect} from "@playwright/test";

test("window handing single child window ",async({page})=>{

   console.log("test stareded");

   await page.goto("https://demo.automationtesting.in/Windows.html");
   await expect(page).toHaveTitle(/Frames & windows/);
   console.log("parent title",page.title());
   console.log("parent uRL",page.url());

   const [popup]=await Promise.all([
         page.waitForEvent('popup'),
     //await page.locator('//button[contains(text(),"click")]').click()
     await page.locator('//button[contains(text(),"click")]').first().click()

   ])
   await popup.waitForLoadState();

   //child window
   console.log("child titel",await popup.title());
   console.log("child url",await popup.url());
  await expect(popup).toHaveTitle(/Selenium/);
  await expect(popup).toHaveURL(/selenium/);
    let doc= await popup.locator('a[href="/documentation"]');
    await expect(doc).toBeVisible();

    console.log("child window validation pass");
    await popup.close();
    await expect(page).toHaveURL("https://demo.automationtesting.in/Windows.html");
    console.log("back to parent  window ");
    await page.waitForTimeout(3000);
})


test.only("Open new seprate window ",async({page})=>{
     console.log("test stareded");

   await page.goto("https://demo.automationtesting.in/Windows.html");
   await expect(page).toHaveTitle(/Frames & windows/);
   console.log("parent title",page.title());
   console.log("parent uRL",page.url());

    await page.locator('a[href="#Seperate"]').click();
    console.log("seprate window tap selected");

    const[popup] =await Promise.all([
          page.waitForEvent('popup'),
          await page.locator('#Seperate button').click()

    ])

     await popup.waitForLoadState();
     await expect(popup).toHaveURL('https://www.selenium.dev/');
     await expect(popup).toHaveTitle(/Selenium/);
      let doc= await popup.locator('a[href="/documentation"]');
     let text= await  doc.textContent();
     console.log(text);
     await expect(doc).toBeVisible();

     //child window
      console.log("child window validation pass");
      await popup.close();
      await expect(page).toHaveURL("https://demo.automationtesting.in/Windows.html");
    console.log("back to parent  window ");
    await page.waitForTimeout(3000);
  })