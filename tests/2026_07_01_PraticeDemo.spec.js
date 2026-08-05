import{test,expect} from "@playwright/test";

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



