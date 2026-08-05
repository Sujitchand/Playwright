
export class OragneHrm3Login {

     constructor(page){
        this.page=page;
           this.usernameTxt = page.locator('//input[@name="username"]');
           this.PasswordTxt = page.locator('//input[@name="password"]');
            this.LoginButton=page.locator('//button[@type="submit"]');
     }

      async goto(){
            await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        }

     async LoginHRM(username,password){
           await this.usernameTxt.fill(username);
            await this.PasswordTxt.fill(password);
            await this.LoginButton.click();
     }

}