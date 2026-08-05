
/* css selector 
1)  syntax #idvalue
2)  tagName with id value
3)  attributeselctor
4)  tagNamewith attributeselctor
5) classselector



*/

import{test,expect} from "@playwright/test";
const baseurl="https://www.saucedemo.com/";
//1)  syntax #idvalue
test("css selector",async({page})=>{
await page.goto(baseurl);
await page.locator('#user-name').fill("standard_user");
await page.waitForTimeout(2000);
await page.locator('#password').fill("secret_sauce");
await page.waitForTimeout(2000);
await page.locator("#login-button").click();

})
//2)  tagName with id value
test("tagName with id value",async({page})=>{
await page.goto(baseurl);
await page.locator('input#user-name').fill("standard_user");
await page.waitForTimeout(2000);
await page.locator('input#password').fill("secret_sauce");
await page.waitForTimeout(2000);
await page.locator("input#login-button").click();
})

//3)  attributeselctor[attributeName='attributevalue']
test("attributeselctor",async({page})=>{
await page.goto(baseurl);
await page.locator('[name="user-name"]').fill("standard_user");
await page.waitForTimeout(2000);
await page.locator('[name="password"]').fill("secret_sauce");
await page.waitForTimeout(2000);
await page.locator('[name="login-button"]').click();
})
//4) tagNamewith attributeselctor
test.only("tagNamewith attributeselctor",async({page})=>{
await page.goto(baseurl);
await page.locator('input[name="user-name"]').fill("standard_user");
await page.waitForTimeout(2000);
await page.locator('input[name="password"]').fill("secret_sauce");
await page.waitForTimeout(2000);
await page.locator('input[name="login-button"]').click();
})

//5) classselector
test ("classselector",async({page})=>{
await page.goto(baseurl);
await page.locator('input[name="user-name"]').fill("standard_user");
await page.waitForTimeout(2000);
await page.locator('input[name="password"]').fill("secret_sauce");
await page.waitForTimeout(2000);
await page.locator('input[name="login-button"]').click();
})

/*codegen cammond 

1)Open a Website and Start Recording
npx playwright codegen https://www.google.com

2) Save the Generated Script
npx playwright codegen --output=tests/login.spec.js https://www.facebook.com

3)Generate Code in JavaScript
npx playwright codegen --target=javascript https://www.facebook.com
*/

/* differnce between  CSS Selector and xpath
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Feature              | CSS Selector                                | XPath                                                  |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Definition           | Uses CSS syntax to locate HTML elements.    | Uses XML path to locate HTML/XML elements.             |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Speed                | Faster                                      | Slightly slower                                        |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Syntax               | Simple and easy                             | More flexible but lengthy                              |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Traversing           | Parent → Child only                         | Parent, Child, Ancestor, Descendant, Siblings           |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Text Support         | Not supported                               | Supports text() and contains()                         |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Dynamic Elements     | Limited support                             | Excellent support                                      |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Performance          | Better                                      | Good                                                   |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Readability          | Easy to read and maintain                   | Complex for long expressions                           |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Best Used            | ID, Class, Name, Stable Attributes          | Dynamic elements, Text, Complex DOM                    |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Example              | input#username                              | //input[@id='username']                                |
+----------------------+---------------------------------------------+---------------------------------------------------------+
| Preferred In Project | First Preference                            | Used when CSS is not sufficient                        |
+----------------------+---------------------------------------------+---------------------------------------------------------+


*/