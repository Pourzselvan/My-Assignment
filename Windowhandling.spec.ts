import test from '@playwright/test'

test ("Windowhandling",async({page,context}) => {

    await page.goto ("https://www.leafground.com/window.xhtml")  

    //create promise

    const Parentwindow = context.waitForEvent("page")

    //do the action

    await page.locator("//span[text()='Open']").click()

    //switch from parent to child

    const childwindow = await Parentwindow

   
    await childwindow.locator("//input[@id ='email']").fill ("p.m.pourzselvan@gmail.com")

    await childwindow.locator("//textarea[@id='message']").fill ("HI is my message")

    await childwindow.locator("//span[text()='Send']").click()

    await childwindow.waitForTimeout(3000)

    await page.bringToFront()

    await page.locator("//span[text()='Open Multiple']").click()


    
})