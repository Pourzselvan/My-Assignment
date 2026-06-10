import test from '@playwright/test'

test("Page fixture" ,async ({page}) => {

    //to load the page

    await page.goto("https://leaftaps.com/opentaps/control/main")

    await page.waitForTimeout(10000) //time to provide details

    await page.locator("[id='username']").fill ("democsr") //css selector using id also acn be used as '#username'

    await page.locator("[name='PASSWORD']").fill("crmsfa") //css selector using name

    await page.locator("[class='decorativeSubmit']").click()//css selector using class

    await page.waitForTimeout(10000)

    await page.locator('text=CRM/SFA').click() //.click() to click the button

    





})