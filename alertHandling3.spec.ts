import test from '@playwright/test'

test("Alerthandling",async ({page}) => {


    page.on('dialog',alerttypeone =>{
        
        const typeofalert = alerttypeone.type()
        console.log(typeofalert)

        const Message1 = alerttypeone.message()
        console.log(Message1)
        if (typeofalert==="alert"){
            alerttypeone.accept()
        }
        else if(typeofalert==="confirm"){
             alerttypeone.dismiss()
        }
        else if(typeofalert==="prompt"){
            alerttypeone.accept("Pourz")
        }

    })
    
    await page.goto ("https://www.leafground.com/alert.xhtml")
//simple alert
    await page.locator("(//span[text() ='Show'])[1]").click()

    await page.waitForTimeout(2000)
//confirm alert
    await page.locator("(//span[text() ='Show'])[2]").click()

    await page.waitForTimeout(2000)
//Prompt alert
    await page.locator("(//span[text() ='Show'])[5]").click()
    
    await page.waitForTimeout(2000)
})