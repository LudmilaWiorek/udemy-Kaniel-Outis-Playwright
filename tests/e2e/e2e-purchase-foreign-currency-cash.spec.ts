import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { Navbar } from '../../page-objects/components/Navbar'
import { CurrencyExchange } from '../../page-objects/CurrencyExchange'

test.describe('Purchase foregin currency cash', () => {
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
    await navbar.clickOnTab('Pay Bills')
    await currencyExchange.createPurchaseCurrency()
    await currencyExchange.assertSuccessMessage()
  })
})
