import{test,expect} from "@playwright/test";


const BaseUrl=" https://login.yahoo.com/";
test("test 1",async({page})=>{


    await page.goto(BaseUrl);
   const emailInput= await page.locator('//input[@id="username"]');
    await expect(emailInput).toBeVisible();
    console.log("Email input is visible");
   const isEditable= emailInput.isEditable();

   if(isEditable){
        await emailInput.fill("student@yahoo.com");
      const value=  await emailInput.inputValue();
      await expect(value).toBe("student@yahoo.com");
   }
   //next button
  const next= page.locator('//span[contains(text(),"Next")]').first();
        const enable=await next.isEnabled();
        console.log(`Next button enable state:${enable}`);
})