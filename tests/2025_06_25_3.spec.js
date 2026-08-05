import{test,expect} from  "@playwright/test";


  const baseUrl="https://www.facebook.com/login/?locale=en_GB";
test("facebook Login",async({page})=>{

       await page.goto(baseUrl);
       const links= await page.locator('//a[@href]');
       const linkcount = await links.count();   
       console.log(`count of the links ${linkcount}`);
              const  allinks = await links.all();
       /*for( const test of allinks){
            // const href = await test.getAttribute("href");
           const href = await test.getAttribute("href");
           console.log(href);

       }
        */

       for(let i=0;i<linkcount;i++){  //0<32  0+1  33
             const link = links.nth(i);
             const href= await link .getAttribute('href');
            const text= await link.textContent();
             const cleantext = text.trim();

             console.log(`${i+1}.url :${href}`);
             console.log(`text:${cleantext}`)

       }

})