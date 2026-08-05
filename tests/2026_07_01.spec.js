import{test,expect} from "@playwright/test";

test("test for multiSelect DroopDown",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

  const colurDroopDown=  await page.locator('#colors');
    const colurs=[{label:'Red'},{label:"Blue"},{label:"Green"}];
    await colurDroopDown.selectOption(colurs);
    await page.waitForTimeout(4000);
    console.log("Multiple options succuessfully");


})

test("handling Droopdown using loop method",async({page})=>{
        console.log("Test staredd");
        await page.goto('https://www.wikipedia.org/');
        await page.locator('input#searchInput').fill("cricket world cup");
         const suggestionOption= page.locator('.suggestion-text');
         await expect(suggestionOption.first()).toBeVisible();
         const allResult= await suggestionOption.allTextContents();
         console.log("All suggestion");
        console.log(allResult);
        //validate count
        expect(allResult.length).toBeLessThanOrEqual(6);
        console.log("count validateion passed");

        for(let i=0;i<allResult.length;i++){
            console.log(`checking${allResult[i]}`)
            if(allResult[i].toLocaleLowerCase().includes('cricket world cup')){
                console.log(`match found:${allResult}`);
                await suggestionOption.nth(i).click();
                break;
            }
        }

          await expect(page).toHaveURL(/Cricket_World_Cup/);
       await page.waitForTimeout(4000);


})

test.only("Amezon online shopping ",async({page})=>{
         console.log("Test staredd");
    await page.goto('https://www.amazon.in/');
    await page.locator('input#twotabsearchtextbox').fill("mobile");
    const suggestion= await page.locator('//div[@role="button"]//span');
     //await page.waitForTimeout(4000);
       await expect(suggestion.first()).toBeVisible();
   const   totalSuggestiom= await suggestion.count();
   console.log(totalSuggestiom);

   for(let i=0;i<totalSuggestiom;i++){
    const text=await suggestion.nth(i).innerText();

    if(text.includes('phone under 2000')){
        await suggestion.nth(i).click();
        break;
    }
   }
   await page.waitForTimeout(4000);


})