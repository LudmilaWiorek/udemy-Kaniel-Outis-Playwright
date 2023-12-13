import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'
import { Navbar } from '../../page-objects/components/Navbar'
import { TransferFundsPage } from '../../page-objects/TransferFundsPage'

test.describe('Transfer Funds and Make Payments', () => {
  let homePage: HomePage
  let loginPage: LoginPage
  let navbar: Navbar
  let transferFundsPage: TransferFundsPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    navbar = new Navbar(page)
    transferFundsPage = new TransferFundsPage(page)

    homePage.visit()
    homePage.clickOnSignIn()
    loginPage.login('username', 'password')
  })

  test('Transfer funds', async () => {
    navbar.clickOnTab('Transfer Funds')
    await transferFundsPage.createTransfer()
    await transferFundsPage.assertVerifyMessage()
    await transferFundsPage.submitTransfer()
    await transferFundsPage.assertSuccessfulMessage()
  })
})
