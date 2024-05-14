import { test, expect } from '@playwright/test';

test('test web table', async ({ page }) => {

    await page.goto('https://cosmocode.io/automation-practice-webtable/')

    const tableContainer = await page.locator("xpath=//table[@id='countries'")

    const rowsTable = await page.locator("xpath=.//tr").all()

    const countries: Country[] = []

    console.log(rowsTable.length)

    for(let row of rowsTable){
        let country: Country = {
            name: await row.locator("xpath=//td[2]").innerText(),
            capital: await row.locator("xpath=//td[3]").innerText(),
            currency: await row.locator("xpath=//td[4]").innerText(),
            primaryLanguage: await row.locator("xpath=//td[5]").innerText(),
        }
        countries.push(country)
    }

    /*for (let pais of countries){
        console.log(pais)
    }*/

    const countryWherePeopleSpeakPortuguese = countries.filter(country => country.primaryLanguage === 'Portuguese')

    console.log('Countries where people speak portuguese are:', countryWherePeopleSpeakPortuguese)

    /*for(let row of rowsTable){
        console.log(await row.innerText())
    }*/

    const row1 = rowsTable.at(1)

    const countryName = await row1?.locator("xpath=.//td[2]").innerText()
    const countryCapital = await row1?.locator("xpath=.//td[3]").innerText()
    const countryCurrency = await row1?.locator("xpath=.//td[4]").innerText()

    console.log(countryName, countryCapital, countryCurrency)


/*
    Element container //table[@id='countries']
    .//tr -> filas
    Check //table[@id='countries']//tr[2]//td[1]
    Country //table[@id='countries']//tr[2]//td[2]
    Capitals //table[@id='countries']//tr[2]//td[3]
    Currency //table[@id='countries']//tr[2]//td[4]
    Primery Language //table[@id='countries']//tr[2]//td[5]
    */
})

interface Country{
    name:string
    capital:string
    currency:string
    primaryLanguage:string
}