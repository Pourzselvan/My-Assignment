import test from '@playwright/test'

test("xpath",async ({page}) => {

    await page.goto ("https://login.salesforce.com/?locale=in")

    await page.locator("//input[@class='input r4 wide mb16 mt8 cusername']").fill("dilipkumar.rajendran@testleaf.com")

    await page.locator("//input[contains(@class,'mt8 password')]").fill("TestLeaf@2025")

    await page.locator("//input[@id='Login']").click()


    
})