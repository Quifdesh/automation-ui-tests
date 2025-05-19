const { test, expect } = require('@playwright/test');

test('Assertions', async ({ page }) => {
    //open app URL
    await page.goto('https://demo.nopcommerce.com/register')

    //page has URl await expect(page).toHaveURL()
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //await expect(page).toHaveTitle()	Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //await expect(locator).toBeVisible()	Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //await expect(locator).toBeEnabled()	Element is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

    //await expect(locator).toBeChecked()	Checkbox is checked

    //radio button
    const maleRadioButton= await page.locator('#gender-male')
    await maleRadioButton.click() //select radio button
    await expect(maleRadioButton).toBeChecked()

    //checbox
    const newsletterCheckBox=await page.locator('#Newsletter')

    await expect(newsletterCheckBox).toBeChecked()

    //await expect(locator).toHaveAttribute()	Element has a DOM attribute
    const regButton =await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    //await expect(locator).toHaveText()	Element matches text
    await expect (await page.locator('.page-title h1')).toHaveText('Register') //full text

    //await expect(locator).toContainText()	Element contains text
    await expect (await page.locator('.page-title h1')).toContainText('Reg') //text of part

    //await expect(locator).toHaveValue()	Input has a value
    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');

})