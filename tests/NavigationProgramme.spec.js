import{test,expect} from "@playwright/test";

test("Navigation between application",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      let oragnehrmTitle= await page.title();
      
    await expect(page).toHaveTitle(oragnehrmTitle);
    
    console.log("oragneHRM page open succuesfully");
    await page.waitForTimeout(5000);
    await page.goto("https://testautomationpractice.blogspot.com/");

      let automationPracticeTitle= await page.title();
      
        await expect(page).toHaveTitle(automationPracticeTitle);
        console.log("oragneHRM page open succuesfully");

        // goback page 
        await page.waitForTimeout(2000);
        await page.goBack();

         let oragnehrmTitle1= await page.title();
        await expect(page).toHaveTitle(oragnehrmTitle1);
        await page.waitForTimeout(2000);
        
        //forward page
        await page.goForward();
        await page.waitForTimeout(2000);

        // reload page 
        await page.reload();
        await page.waitForTimeout(2000);
       

})
/*   ===============Full code explination line by line=====================================
import{test,expect} from "@playwright/test";
explination:-
import---> Used to import functionality from another module.
test   -> Used to create a test case.
expect -> Used for assertions/validations.
Without importing these, Playwright methods cannot be used.
================================================================================================
test("Navigation between application",async({page})=>{ })
explination:-Used to create a Playwright test case.
Syntax:
test("Test Name", async ({ page }) => { })


*/