import { Locator, Page } from '@playwright/test'
import { PurchaseCurrencyModel } from '../models/interfaceforcurrencypurch.model'

export class CurrencyExchange {
  readonly page: Page
  readonly purchaseForeignCurrency: Locator
  readonly currencySelectBox: Locator
  readonly rateMessage: Locator
  readonly amountInput: Locator
  readonly dollarRadio: Locator
  readonly calculateCostsButton: Locator
  readonly conversionAmountMessage: Locator
  readonly purchaseButton: Locator

  constructor(page: Page) {
    this.page = page
    this.purchaseForeignCurrency = page.locator(
      'text=Purchase Foreign Currency'
    )
    this.currencySelectBox = page.locator('#pc_currency')
    this.rateMessage = page.locator('#sp_sell_rate')
    this.amountInput = page.locator('#pc_amount')
    this.dollarRadio = page.locator('#pc_inDollars_true')
    this.calculateCostsButton = page.locator('#pc_calculate_costs')
    this.conversionAmountMessage = page.locator('#pc_conversion_amount')
    this.purchaseButton = page.locator('#purchase_cash')
  }

  async purchaseCurrencyNewFunction(purchaseCurrency: PurchaseCurrencyModel) {
    await this.purchaseForeignCurrency.click()
    await this.currencySelectBox.selectOption(
      purchaseCurrency.currencySelectBox
    )
    await this.amountInput.fill(purchaseCurrency.amountInput)
    await this.dollarRadio.click()
    await this.calculateCostsButton.click()
    await this.purchaseButton.click()
  }
}
