import test from '@playwright/test'

test("Frame handling",async ({page}) => {


    page.once('dialog',alerttype=>{
        
        const typeofalert = alerttype.type()
        console.log(typeofalert)

        const Message1 = alerttype.message()
        console.log(Message1)

        alerttype.accept()

    })
    
    await page.goto ("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    await page.frameLocator("(//iframe)[1]").locator("//button[text()='Try it']").click()

    await page.waitForTimeout(2000)
}
)

