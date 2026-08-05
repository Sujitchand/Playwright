import{test ,expect} from "@playwright/test"

test("demo register",async({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html");

    await page.locator('//input[@placeholder="First Name"]').fill("Sujit");
      await page.waitForTimeout(3000);
    await page.locator('//input[@placeholder="Last Name"]').fill("chand");
      await page.waitForTimeout(3000);
    await page.locator('//textarea[@ng-model="Adress"]').fill("At/p-Abc tal- walwa dist- sangli");
      await page.waitForTimeout(3000);
     
      await page.locator('//input[@type="email"]').fill("sujitchand0011gmail.com");
      await page.locator('//input[@type="tel"]').fill("8600367637");
      
    await page.locator('//label[text()=" Male "]').click(); 
    await page.locator('//input[@id="checkbox1"]').click();
    await page.locator('#msdd').click();
    await page.locator('//a[text()="Bulgarian"]').click();
    await page.locator('#msdd').click();
   await page.locator('#Skills').selectOption('Java');
  




    await page.locator('//input[@id="firstpassword"]').fill("Sujit@19876");
    await page.locator('//input[@id="secondpassword"]').fill("Sujit@19876");


    await expect(page).toHaveURL("https://demo.automationtesting.in/Register.html");

})