import { test } from "@playwright/test";

//=========================================
// Smoke / Sanity / Regression Tags
//=========================================

test("Login @sanity", async () => {
    console.log("Login Successfully");
});

test("Logout @regression", async () => {
    console.log("Logout Successfully");
});

test("Invalid Login @sanity", async () => {
    console.log("Login Failed");
});

test("Logout Failed @regression", async () => {
    console.log("Logout Failed");
});

test("Dashboard @regression @sanity", async () => {
    console.log("Dashboard Visible Successfully");
});

//npx playwright test --grep "@regrestion"   --it will work for all tags
//npx playwright test --grep "@regrestion" --workers=1  serially works like 1/2/3 tests executes
//npx playwright test --grep "@regression|@sanitiy"    --