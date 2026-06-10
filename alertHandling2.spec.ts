import test from '@playwright/test'

test("Alerthandling",async ({page}) => {


    page.once('dialog',alerttypeone =>{
        
        const typeofalert = alerttypeone.type()
        console.log(typeofalert)

        const Message1 = alerttypeone.message()
        console.log(Message1)

        alerttypeone.accept()

    })
    
    await page.goto ("https://www.leafground.com/alert.xhtml")

    await page.locator("(//span[text() ='Show'])[1]").click()

    await page.waitForTimeout(1000)

    await page.locator("(//span[text() ='Show'])[5]").click()
    
    
    await page.waitForTimeout(2000)
})