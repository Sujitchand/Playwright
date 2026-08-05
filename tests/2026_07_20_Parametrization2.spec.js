import { test, expect } from "@playwright/test";
import userdata from "../Screenshots/testdata.json";

for (const user of userdata) {

  test(`Login with ${user.username}`, async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill(user.username);
    await page.getByPlaceholder("Password").fill(user.password);

    await page.getByRole("button", { name: "Login" }).click();

    if (user.expected === "Dashboard") {

      // Wait until Dashboard page is loaded
      await expect(page).toHaveURL(/dashboard/);
      await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();

      console.log(`✅ Login Successful : ${user.username}`);

    } else {

      // Verify Invalid Credentials message
      await expect(page.getByText("Invalid credentials")).toBeVisible();

      console.log(` Invalid Credentials : ${user.username}`);
    }

  });

}