/*const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.facebook.com/login/');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Forgotten password?' }).click();
  await page.getByText('English (UK)').click();
  await page.locator('div').filter({ hasText: /^मराठी$/ }).first().click();
  await page.getByRole('button', { name: 'हिन्दी' }).click();
  await page.locator('div').filter({ hasText: /^اردو$/ }).first().click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();
*/