import{test,expect} from "@playwright/test";

test("Static table handling",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.waitForTimeout(4000);
        await page.locator('//h2[contains(text(),"Static Web Table")]').scrollIntoViewIfNeeded();
        await page.waitForTimeout(4000);

     const rows=   await page.locator('//table[@name="BookTable"]//tr');
     console.log("total rows count",await rows.count());
    const columns= await page.locator('//table[@name="BookTable"]//th');
      console.log("total columns count",await columns.count());
     const books= page.locator('//table[@name="BookTable"]//tr//td[1]');

     
     for(let i=0;i<books.count();i++){
            console.log(await books.nth(i).textContent());
     }
          const tablerows=   await page.locator('//table[@name="BookTable"]//tr');
          for(let i=2;i<=await tablerows.count();i++){
           const booksName= await page.locator(`//table[@name="BookTable"]//tr[${i}]//td[4]`).textContent();
           if(booksName=="Master In Java"){
           const price= await page.locator(`//table[@name="BookTable"]//tr[${i}]//td[4]`).textContent();
            console.log("book name",booksName);
              console.log("book price",price);
              break;
           }
          }
})