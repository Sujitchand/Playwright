import {test,expect} from "@playwright/test";


const BaseUrl="https://www.facebook.com/login/";
test("test facebook Links",async({page})=>{
 await page.goto(BaseUrl);
await page.waitForLoadState('domcontentloaded');
//relative xpath   
const links=await page.locator('//a[@href]');
  const linkcount= await links.count();
  console.log(`total link found ${linkcount}`)
   //Array to store link data
   const linkdata= [];  
  
  //count
    for(let i=0;i<linkcount;i++){
        const link=links.nth(i);
        //nth is a method 
        //nth index start form 0(zero bases index)
        //links- locators value
        //nth(i) -get the specific element at index i
     const href=  await  link.getAttribute("href");
     const  text  =  await link.textContent();
       const cleanText= await text.trim();
        
       linkdata.push({
        index :i+1,
        url :href,
        text :cleanText

       })
       console.log(`${i+1}url:${href}`);
       console.log(`Text :${cleanText}`);
       console.log("-----------------------");
    }

    console.log(linkdata);
})

test.only("test2Relativexpath",async({page})=>{
    await page.goto(BaseUrl);
    //absolte xpath
    await page.locator('/html/body/div[1]/div/div/div/div/div/div/div[1]/div/div/div/div[1]/div/div[3]/div/div/div/div/div/div/div/div/div[2]/form/div/div[1]/div/div[1]/div/div/div[1]/input').fill("sujitchand@gmail.com");
                await page.waitForTimeout(4000);
})

/*   
==========================================
FACEBOOK LINKS AUTOMATION USING PLAYWRIGHT
==========================================

Requirement:
------------
Find all available links present on the Facebook Login page and print:

1. Link Number
2. Link URL (href)
3. Link Text

Also demonstrate the use of Relative XPath and Absolute XPath.

URL:
https://www.facebook.com/login/

==========================================
TEST CASE 1 : FIND ALL FACEBOOK LINKS
==========================================

Code:

const links = page.locator('//a[@href]');

Explanation:
------------
This locator finds all anchor (<a>) tags that contain an href attribute.

XPath Used:
-----------
//a[@href]

Type:
-----
Relative XPath

Why Relative XPath?
-------------------
1. Short and readable.
2. Easy to maintain.
3. Does not depend on the complete DOM structure.
4. Most commonly used in Playwright and Selenium.

==========================================
METHODS USED
==========================================

1. page.goto()
----------------

Syntax:
await page.goto(BaseUrl);

Purpose:
--------
Used to navigate to the specified URL.

Example:
--------
await page.goto("https://www.facebook.com/login/");

==========================================

2. page.waitForLoadState()
--------------------------

Syntax:
await page.waitForLoadState('domcontentloaded');

Purpose:
--------
Waits until the page DOM is loaded.

Why Used?
---------
Ensures all HTML elements are available before interacting with them.

==========================================

3. locator()
------------

Syntax:
page.locator('//a[@href]');

Purpose:
--------
Finds elements on the web page.

Why Used?
---------
To locate all Facebook links.

==========================================

4. count()
----------

Syntax:
const linkcount = await links.count();

Purpose:
--------
Returns the total number of matching elements.

Example:
--------
If page contains 12 links,
count() returns 12.

==========================================

5. nth()
--------

Syntax:
links.nth(i);

Purpose:
--------
Selects a specific element using index.

Why Used?
---------
To access each link one by one.

Example:
--------
links.nth(0) → First Link
links.nth(1) → Second Link
links.nth(2) → Third Link

Index starts from 0.

==========================================

6. getAttribute()
-----------------

Syntax:
await link.getAttribute("href");

Purpose:
--------
Retrieves the value of an attribute.

Why Used?
---------
To get the actual URL of the Facebook link.

Example:
--------
<a href="/recover/initiate">

Output:
-------
/recover/initiate

==========================================

7. textContent()
----------------

Syntax:
await link.textContent();

Purpose:
--------
Retrieves the text displayed inside the element.

Example:
--------
<a href="/r.php">
Sign Up
</a>

Output:
-------
Sign Up

==========================================

8. trim()
---------

Syntax:
text.trim();

Purpose:
--------
Removes leading and trailing spaces.

Example:
--------
" Sign Up "

Output:
-------
"Sign Up"

==========================================

9. push()
---------

Syntax:
linkdata.push({...});

Purpose:
--------
Stores link information inside an array.

Why Used?
---------
To keep all links in one collection.

Example:
--------
{
 index:1,
 url:"/r.php",
 text:"Sign Up"
}

==========================================

10. console.log()
-----------------

Purpose:
--------
Prints information in console.

Example:
--------
console.log(`${i+1} URL: ${href}`);

Output:
-------
1 URL: /r.php

==========================================
FLOW OF EXECUTION
==========================================

Step 1:
Open Facebook Login Page

Step 2:
Wait until page loads

Step 3:
Find all links using

//a[@href]

Step 4:
Count total links

Step 5:
Loop through each link

Step 6:
Get href value

Step 7:
Get link text

Step 8:
Store data in array

Step 9:
Print all links in console

==========================================
EXPECTED OUTPUT
==========================================

Total Links Found: 10

1 URL : /recover/initiate
Text : Forgotten password?

---------------------

2 URL : /r.php
Text : Sign up for Facebook

---------------------

3 URL : /pages/create
Text : Create a Page

---------------------

==========================================
TEST CASE 2 : ABSOLUTE XPATH
==========================================

Code:

await page.locator('/html/body/div[1]/div/div/div/div/div/div/div[1]/div/div/div/div[1]/div/div[3]/div/div/div/div/div/div/div/div/div[2]/form/div/div[1]/div/div[1]/div/div/div[1]/input').fill("sujitchand@gmail.com");

XPath Used:
-----------
/html/body/div[1]/div/div/div/div/div/div/div[1]/div/div/div/div[1]/div/div[3]/div/div/div/div/div/div/div/div/div[2]/form/div/div[1]/div/div[1]/div/div/div[1]/input

Type:
-----
Absolute XPath

Purpose:
--------
Locate the Email input field using the complete DOM path.

Disadvantages:
--------------
1. Very long.
2. Difficult to maintain.
3. Breaks if any parent element changes.
4. Not recommended for automation projects.

Preferred Way:
--------------

//input[@id='email']

or

//input[@name='email']

==========================================
INTERVIEW QUESTION
==========================================

Q. Why did you use Relative XPath for finding Facebook links?

Answer:
--------
I used Relative XPath because it is shorter, more reliable, and independent of the complete DOM structure. It is easier to maintain and less likely to break when the UI changes.

Q. Why did you use count()?

Answer:
--------
count() is used to find the total number of matching elements returned by a locator.

Q. Why did you use nth()?

Answer:
--------
nth() is used to access each element individually based on its index.

Q. Why did you use getAttribute("href")?

Answer:
--------
To retrieve the actual URL associated with each Facebook link.

Q. Why did you use textContent()?

Answer:
--------
To retrieve the visible text displayed for each link.

==========================================
CONCLUSION
==========================================

This script successfully:
✓ Opens Facebook Login Page
✓ Finds all links using Relative XPath
✓ Counts total links
✓ Retrieves URL and Link Text
✓ Stores data in an array
✓ Prints all links in console
✓ Demonstrates both Relative XPath and Absolute XPath
====================================================================================
Differnce between Absolute XPath and Relative XPath  
====================================================================================
+----------------------+------------------------------------------------------+------------------------------------------------------+
| Feature              | Absolute XPath                                       | Relative XPath                                       |
+----------------------+------------------------------------------------------+------------------------------------------------------+
| Definition           | Starts from the root node of the DOM                 | Starts from anywhere in the DOM                      |
| Syntax               | Begins with a single slash (/)                       | Begins with double slash (//)                        |
| Example              | /html/body/div/form/input                            | //input[@id='email']                                 |
| Path                 | Complete path from root to element                   | Partial path based on attributes or text             |
| Length               | Usually long and complex                             | Usually short and simple                             |
| Readability          | Difficult to read and maintain                       | Easy to read and maintain                            |
| Reliability          | Less reliable when page structure changes            | More reliable when page structure changes            |
| Maintenance          | High maintenance required                            | Low maintenance required                             |
| Performance          | Can be slower in large DOM structures                | Generally faster and more efficient                  |
| Dependency           | Depends on the entire DOM hierarchy                  | Depends on element attributes or relationships       |
| Flexibility          | Less flexible                                        | More flexible                                        |
| Usage in Automation  | Rarely used in Selenium/Playwright projects          | Widely used in Selenium/Playwright projects          |
| Breakage Risk        | High - breaks if any parent node changes             | Low - works even if some parent nodes change         |
| Preferred Choice     | Not recommended for dynamic web applications         | Recommended for dynamic web applications             |
+----------------------+------------------------------------------------------+------------------------------------------------------+

Examples:

Absolute XPath:
---------------
/html/body/div/form/input

Relative XPath:
---------------
//input[@id='email']
//input[@name='email']
//button[text()='Login']

Interview Answer:
-----------------
Absolute XPath starts from the root node and follows the complete path to an element.
Relative XPath starts from anywhere in the DOM using attributes, text, or relationships.
Relative XPath is more flexible, maintainable, and preferred in automation testing.


*/