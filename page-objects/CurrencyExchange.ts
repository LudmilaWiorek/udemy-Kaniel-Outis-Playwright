import { expect, Locator, Page } from '@playwright/test'

export class CurrencyExchange {
  readonly page: Page
  readonly purchaseForeignCurrency: Locator
  readonly currencySelectbox: Locator
  readonly rateMessage: Locator
  readonly amountInput: Locator
  readonly dollarRadio: Locator
  readonly calculateCostsButton: Locator
  readonly conversionAmountMessage: Locator
  readonly purchaseButton: Locator
  readonly successMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.purchaseForeignCurrency = page.locator(
      'text=Purchase Foreign Currency'
    )
    this.currencySelectbox = page.locator('#pc_currency')
    this.rateMessage = page.locator('#sp_sell_rate')
    this.amountInput = page.locator('#pc_amount')
    this.dollarRadio = page.locator('#pc_inDollars_true')
    this.calculateCostsButton = page.locator('#pc_calculate_costs')
    this.conversionAmountMessage = page.locator('#pc_conversion_amount')
    this.purchaseButton = page.locator('#purchase_cash')
    this.successMessage = page.locator('#alert_content')
  }
  async createPurchaseCurrency() {
    await this.purchaseForeignCurrency.click()
    await this.currencySelectbox.selectOption('EUR')
    await expect(this.rateMessage).toContainText('1 euro (EUR)')
    await this.amountInput.type('500')
    await this.dollarRadio.click()
    await this.calculateCostsButton.click()
    await expect(this.conversionAmountMessage).toContainText(
      '500.00 U.S. dollar (USD)'
    )
    await this.purchaseButton.click()
  }
  async assertSuccessMessage() {
    await expect(this.successMessage).toBeVisible()
    await expect(this.successMessage).toContainText(
      'Foreign currency cash was successfully purchased.'
    )
  }
}
