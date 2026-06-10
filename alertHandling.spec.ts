import test from '@playwright/test'

test("Alerthandling",async ({page}) => {

    //auto cancel due to inbuilt palywright function
    await page.goto ("https://www.leafground.com/alert.xhtml")

    await page.locator("(//span[text() ='Show'])[1]").click()

    await page.waitForTimeout(1000)


    
})

