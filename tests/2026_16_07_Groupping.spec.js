    import{test,expect}  from "@playwright/test";

         // Runs before all test
    test.beforeAll(async()=>{
        console.log("Before all Test execution started ");

    })
    // Runs before every test
    test.beforeEach(async({ page })=>{
        console.log("Before each test case ");
        await page.goto("https://www.saucedemo.com/");

    })
       
    // Runs after every test
    test.afterEach(async({page})=>{
        console.log("after each test case ");
        page.screenshot({path:"Screenshoots/afterImage.png",fullPage:true});
    })

    // Runs once after all tests
test.afterAll(async () => {
    console.log("After All - All Tests Completed");
});

    test.describe.only("Login module",()=>{
        test("test valid login",async({page})=>{

            await page.locator('#user-name').fill("standard_user");
            await page.locator('#password').fill("secret_sauce");
            await page.locator('#login-button').click();
             await page.waitForTimeout(4000);
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
           
        });

        test.only("Invalid login",async({page})=>{
            
            await page.locator('#user-name').fill("sujit");
            await page.locator('#password').fill("secret_sauce");
            await page.locator('#login-button').click();
            await expect(page.locator("h3"))
                .toContainText("Epic sadface");
                 await page.waitForTimeout(4000);
        });


    })

    /* 
      Q1.Can we use multiple hooks in one test file?
    -->Yes. A test file can contain all four hooks:
       beforeAll()  -->beforeAll() runs once before all test cases.
       beforeEach() --->beforeEach() runs before every test case.
       afterEach()  --->afterEach() runs after every test case.
       afterAll()   --->afterAll() runs once after all test cases.
    
     Q2. What is test.describe() in Playwright?
    -->test.describe() is used to group related test cases into a single logical module. 
    It improves code organization, readability, maintenance, and reporting.

    Q3. Can we create multiple describe blocks?
    -->Yes. We can create multiple describe blocks for different modules like Login, Admin, and Dashboard.
    
      Q4.What is Grouping and Hooks in Playwright?
    -->Grouping means organizing related test cases into a single logical module using test.describe().
    It improves:
          Code organization
          Readability
          Maintenance 
          Reporting
    
    
    
    */