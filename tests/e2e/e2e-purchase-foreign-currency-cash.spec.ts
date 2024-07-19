import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { Navbar } from '../../page-objects/components/Navbar'
import { CurrencyExchange } from '../../page-objects/CurrencyExchange'
import { PurchaseCurrencyModel } from '../../models/interfaceforcurrencypurch.model'

test.describe('Purchase foreign currency cash', () => {
  let homePage: HomePage
  let loginPage: LoginPage
  let navbar: Navbar
  let currencyExchange: CurrencyExchange

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    navbar = new Navbar(page)
    currencyExchange = new CurrencyExchange(page)

    await homePage.visit()
    await homePage.clickOnSignIn()
    await loginPage.login('username', 'password')
  })

  test('Should purchase foreign currency', async ({ page }) => {
    const purchaseCurrency: PurchaseCurrencyModel = {
      currencySelectBox: 'EUR',
      amountInput: '500',
    }
    await navbar.clickOnTab('Pay Bills')
    await currencyExchange.purchaseCurrencyNewFunction(purchaseCurrency)

    const successMessage = page.locator('#alert_content')
    await expect(successMessage).toBeVisible()
    await expect(successMessage).toContainText(
      'Foreign currency cash was successfully purchased.'
    )
  })
})
