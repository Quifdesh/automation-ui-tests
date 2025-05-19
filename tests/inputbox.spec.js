const { test, expect } = require('@playwright/test');

test('Email input assertions', async ({ page }) => {
    // Sayfaya git
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2Flogin');

    // Email input elementini bul
    const emailInput = page.locator('#Email');

    // Input'a değer yaz
    await emailInput.fill('test@demo.com');

    // Değerin gerçekten yazıldığını assert et
    await expect(emailInput).toHaveValue('test@demo.com');
});
