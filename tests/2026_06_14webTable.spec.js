import{test,expect} from "@playwright/test";
import { promises } from "node:dns";

test("window handling",async({page})=>{

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

       const [newPage] = await  Promise.all([
                page.waitForEvent('popup'),
                page.locator('//a[contains(text(),"OrangeHRM, Inc")]').click()
        ])
        await newPage.waitForLoadState();  
        console.log("parent titel",await  page.title());
           console.log("parent titel",page.url());

           console.log("child titel",await  newPage.title());
            console.log("child url",newPage.url());
            //bring parent window to front
            await page.bringToFront();
          await   newPage.bringToFront();

})


