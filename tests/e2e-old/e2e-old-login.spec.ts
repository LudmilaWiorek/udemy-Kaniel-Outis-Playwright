import { test, expect } from '@playwright/test'

test.describe.parallel('Login / Logout Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html')
  })

  test('Negative Scenario for login', async ({ page }) => {
    await page.click('#signin_button')
    await page.type('#user_login', 'invalid username')
    await page.type('#user_password', 'invalid password')
    await page.click('text=Sign in')
    const usernameInput = await page.locator('#user_login')
    await expect(usernameInput).toBeVisible()
  })

  test('Positive Scenario for login + logout', async ({ page }) => {
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')
    const accountSummaryTab = await page.locator('#account_summary_tab')
    await expect(accountSummaryTab).toBeVisible

    await page.goto('http://zero.webappsecurity.com/logout.html')
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
