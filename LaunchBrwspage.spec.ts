import test from '@playwright/test'

test("Page fixture" ,async ({page}) => {

    await page.goto("http://www.facebook.com")

    const getPageTitle = await page.title()

    console.log("Page title:" +getPageTitle)
    
})