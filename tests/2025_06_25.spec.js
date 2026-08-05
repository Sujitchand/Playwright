import { test } from "@playwright/test";

test("Screenshot", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    try {

        throw new Error("Dummy Failure");

    } catch (e) {

        await page.screenshot({
            path: "Screenshots/failure.png"
        });

        console.log("Screenshot Taken");

        throw e;
    }

});