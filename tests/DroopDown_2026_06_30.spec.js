import{test,expect} from "@playwright/test";
import { assert } from "node:console";

test("handle static droopwdon",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");
      const countryDroopdoen =await page.locator("#country");

        await expect(countryDroopdoen).toBeVisible();

        await countryDroopdoen.selectOption({value:"india"});
        console.log("slected by value: 'India'");
        await page.waitForTimeout(5000);

        await countryDroopdoen.selectOption({label:"Brazil"});
        console.log("slected by value: 'Brazil'");
        await page.waitForTimeout(5000);

         await countryDroopdoen.selectOption({index:2});
        console.log("slected by value: 'index2'");

       const selectedValue= await countryDroopdoen.inputValue();
       console.log(selectedValue);
       await expect(countryDroopdoen).toHaveValue(selectedValue);

      const options= countryDroopdoen.locator('option');
      const optionCount= await options.count();
      console.log("total opetions in the dropdown",optionCount);

      //print all dropdown

      for(let i=0;i<optionCount;i++){
            const optiontext=await options.nth(i).textContent();
            console.log(`opetions ${i+1}:${optiontext.trim()}`);
      }
})