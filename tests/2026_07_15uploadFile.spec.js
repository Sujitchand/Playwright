import{test,expect} from "@playwright/test";
import path from "node:path";
import fs from "fs";
import pdfParse from "pdf-parse";

//Upload file 
test("upload file",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload");
    //const filepath= path.join(__dirname,"../TestData/Playwright_Interview_Prep_TWJ.pdf")
    const filepath = path.join(__dirname,"../Screenshots/Playwright_Interview_Prep_TWJ.pdf");
    console.log("__dirname =", __dirname);
   console.log("filepath =", filepath);
    console.log("exists =", fs.existsSync(filepath));
    await  page.locator('#file-upload').setInputFiles(filepath);
   await page.locator('#file-submit').click();
   await expect(page.locator('h3')).toHaveText("File Uploaded!");
       await page.waitForTimeout(3000);
   await expect(page.locator('#uploaded-files')).toHaveText("Playwright_Interview_Prep_TWJ.pdf");
   console.log("File Uploaded Successfully");
})


test("download pdf file",async({page})=>{
    // open the url 
        await page.goto("https://the-internet.herokuapp.com/download");

        //   // Download PDF
      const[download] = await Promise.all([

         page.waitForEvent("download"),
         page.locator('//a[contains(text(),"P12_TestOtomasyonuFullPage.pdf")]').click()
        ]);
            // Get file name
       const filename= download.suggestedFilename()
       console.log("downloaded filename",filename);
            // Save file
         const downloadPath = path.join(__dirname,"..","Downloads",filename);
        await  download.saveAs(downloadPath);
             // Verify file exists
        expect(fs.existsSync(downloadPath)).toBeTruthy();
         console.log("File Saved Successfully");
          // Read PDF
          const pdfBuffer = fs.readFileSync(downloadPath);

const pdf = await pdfParse(pdfBuffer);
console.log(pdf.text);
    // Verify expected text
expect(pdf.text).toContain("Top Selling Products");
  console.log("PDF Text Validation Successful");
})

test.only("file upload1",async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/upload");
       
      //const filepath=  path.join(__dirname,"../Screenshots/Playwright_Interview_Prep_TWJ.pdf");
      const filepath = path.join(__dirname,"../Screenshots/Playwright_Interview_Prep_TWJ.pdf");
       console.log("__dirname =", __dirname);
   console.log("filepath =", filepath);
    console.log("exists =", fs.existsSync(filepath));
        await page.locator('#file-upload').setInputFiles(filepath);
      await page.locator('#file-submit').click();
      
      await expect(page.locator('h3')).toHaveText("File Uploaded!");
       await page.waitForTimeout(3000);
   await expect(page.locator('#uploaded-files')).toHaveText("Playwright_Interview_Prep_TWJ.pdf");
   console.log("File Uploaded Successfully");


})