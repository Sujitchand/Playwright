import{test,expect} from "@playwright/test";

test("test2",async({page})=>{

    console.log("test stared");

   await page.goto("https://demo.automationtesting.in/Register.html");

    const yearDropDown=await page.locator('#yearbox');
    const monthDropDown=  await page.locator('//select[@placeholder="Month"]');
    const dayDropDown=await page.locator('#daybox');

    console.log("validate drop visibility");
    await expect(yearDropDown).toBeVisible();
    await expect(monthDropDown).toBeVisible();
    await expect(dayDropDown).toBeVisible();

     console.log("all  drop  down visibility");
   const  yearOptions= await yearDropDown.locator('option').allTextContents();
    console.log("aviablbe years",yearDropDown);
    console.log("total years",yearDropDown.length);

     const  monthOptions= await monthDropDown.locator('option').allTextContents();
    console.log("aviablbe years",monthOptions);
    console.log("total months",monthOptions.length);

     const  dayOptions= await dayDropDown.locator('option').allTextContents();
    console.log("aviablbe years",dayOptions);
    console.log("total days",dayOptions.length);

    //select value from the droop down

    await yearDropDown.selectOption('2012');
    await monthDropDown.selectOption({label:'April'});
    await dayDropDown.selectOption('23');

    await page.waitForTimeout(5000);

    const selectedYear= await yearDropDown.inputValue();
     const selectedMonth= await monthDropDown.inputValue();
      const selecteDay= await dayDropDown.inputValue();

      console.log("selected year:",selectedYear);
       console.log("selected month:",selectedMonth);
        console.log("selected day:",selecteDay);
        if(selectedYear=="12"){
            console.log("selected year is correct");
        }else{
               console.log("selected year is correct");
        }

})