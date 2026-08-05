import { BasePage } from "../BasePage/BasePage";

export class OrangeHrM2Login extends BasePage{

  constructor(page){
        super(page);
          this.usernametxt =page.locator('//input[@name="username"]');
          this.passwordtxt=page.locator('//input[@name="password"]');
          this.LoginButton=page.locator('//button[@type="submit"]');

  }
    
  async goto() {
        await this.navigate("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async login(username,password){
        await this.type(this.usernametxt,username);
         await this.type(this.passwordtxt,password);
          await this.click(this.LoginButton);
    }

    async verifyDashboard(){
        await expect(this.dashBoardHeader).toHaveText("Dashboard");
    }
}