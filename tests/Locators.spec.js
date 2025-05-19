const { test, expect } = require('@playwright/test');

test('Locators', async ({ page }) => {

    await page.goto("https://demoblaze.com/index.html");

    // Click on login button
    await page.click('#login2');

    // Fill in username
    await page.fill('#loginusername', 'pavanol');

    // Fill in password
    await page.fill('#loginpassword', 'test@123');

    // Click on Log in button using XPath
    await page.click("//button[normalize-space()='Log in']");

    // Verify logout link is visible using XPath
    const logoutlink = page.locator("//a[normalize-space()='Log out']");
    await expect(logoutlink).toBeVisible();

    await page.close();
});
