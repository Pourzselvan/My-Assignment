import test from '@playwright/test'

test ("Dropdown" , async ({page}) => {

    await page.goto ("https://www.telerik.com/contact")

    await page.waitForTimeout(5000)

    await page.selectOption('#Dropdown-1',{label:'Product questions'})

    await page.waitForTimeout(3000) 

    await page.selectOption("[name='DropdownListFieldController']",{index:3})

    await page.waitForTimeout(3000) 

    await page.selectOption('#Country-1',{value:'Anguilla'})


    
})