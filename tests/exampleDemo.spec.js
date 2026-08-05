import{test,expect} from "@playwright/test";

test("Test demo ",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(5000);

    //page title using title() method
     let orangeHrmtitle =await page.title();

     //validate page using toHaveTitle() method 
    //await expect(page).toHaveTitle("Test demo");  <----- if using like this then fail test case
     await expect(page).toHaveTitle(orangeHrmtitle);
     console.log("title of the page ",orangeHrmtitle);
})

test.only("Home page URL ",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(5000);
//      for the validate the url
     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
})