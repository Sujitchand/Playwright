/*What is Page Object Model (POM)?
Answer (Interview):
Page Object Model (POM) is a design pattern used in automation testing to
 organize the framework efficiently. In POM, each web page is represented as
  a separate class that contains all the locators and methods related to that page.
Test scripts interact with these methods instead of directly using locators.
This approach improves code reusability, reduces duplication, simplifies maintenance,
and makes the framework more scalable.If any UI element changes
 we only update the locator in the corresponding page class without modifying all the test cases. */

 export class OrangeHRMLogin {

    constructor(page){
            this.page=page;
            this.usernametxt = page.locator('//input[@name="username"]');
            this.passwordtxt = page.locator('//input[@name="password"]');
            this.loginButton = page.locator('//button[@type="submit"]');
             this.dashBoardHeader= page.locator('h6');
    }
        async goto(){
            await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        }
    async login(username,password){
            await this.usernametxt.fill(username);
            await this.passwordtxt.fill(password);
            await this.loginButton.click();
    }

     async verifyDashboard(){
        await this.dashBoardHeader.waitFor(); 
     }

 }