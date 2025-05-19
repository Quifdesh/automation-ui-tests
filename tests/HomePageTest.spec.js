const { test, expect } = require('@playwright/test');

// Title doğrulama
test('Home Page', async ({ page }) => {
    await page.goto('' +
        '');

    await expect(page).toHaveTitle('STORE');

    const pageTitle = await page.title();
    console.log('Page title is:', pageTitle);

    // URL doğrulama
    await expect(page).toHaveURL('https://demoblaze.com/index.html');

    const pageURL = await page.url();
    console.log('Page URL is:', pageURL);

    await page.close();
});
