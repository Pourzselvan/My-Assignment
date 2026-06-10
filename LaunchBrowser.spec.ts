import test from '@playwright/test'
import {chromium} from '@playwright/test'

test('Launch Browser', async ({}) => {
    const browser = await chromium.launch({headless:false})

    const context = await browser.newContext()

    const page = await context.newPage()

    await page.goto("http://www.gmail.com")

    const getPageTitle = await page.title()

    console.log("Page title:" +getPageTitle)

})