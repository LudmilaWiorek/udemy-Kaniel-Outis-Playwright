import { expect, Locator, Page } from '@playwright/test'

export class TransferFundsPage {
  readonly page: Page
  readonly fromAccountSelectbox: Locator
  readonly toAccountSelectbox: Locator
  readonly amountInput: Locator
  readonly descriptionInput: Locator
  readonly submitPaymentButton: Locator
  readonly messageVerify: Locator
  readonly messageSuccessful: Locator

  constructor(page: Page) {
    this.page = page
    this.fromAccountSelectbox = page.locator('#tf_fromAccountId')
    this.toAccountSelectbox = page.locator('#tf_toAccountId')
    this.amountInput = page.locator('#tf_amount')
    this.descriptionInput = page.locator('#tf_description')
    this.submitPaymentButton = page.locator('#btn_submit')
    this.messageVerify = page.locator('h2.board-header')
    this.messageSuccessful = page.locator('.alert-success')
  }

  async createTransfer() {
    await this.fromAccountSelectbox.selectOption('2')
    await this.toAccountSelectbox.selectOption('3')
    await this.amountInput.type('500')
    await this.descriptionInput.type('some nice description')
    await this.submitPaymentButton.click()
  }
  async assertVerifyMessage() {
    await expect(this.messageVerify).toContainText('Verify')
  }
  async submitTransfer() {
    await this.submitPaymentButton.click()
  }
  async assertSuccessfulMessage() {
    await expect(this.messageSuccessful).toContainText(
      'You successfully submitted your transaction.'
    )
  }
}
