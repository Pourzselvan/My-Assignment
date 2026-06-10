import test from '@playwright/test'

test ("File upload",async ({page}) => {

    await page.goto("https://www.naukri.com/registration/createAccount")

    await page.locator("(//div[@class ='textWrap'])[1]").click()

    await page.waitForTimeout(2000)

    await page.locator("//input[@type ='file']").setInputFiles('./tests/Testdata/Fake-Resume.pdf')

    await page.waitForTimeout(2000)


    
})