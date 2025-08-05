// Page Object Model for Cogmento CRM Login Page
const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[name="email"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('div.ui.fluid.large.blue.submit.button');
    this.errorMessage = page.locator('div.ui.negative.message');
    this.dashboardHeader = page.locator('span.user-display'); // Appears on dashboard after login
  }

  async goto() {
    await this.page.goto('https://ui.cogmento.com/');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    if (await this.errorMessage.isVisible()) {
      return await this.errorMessage.textContent();
    }
    return null;
  }

  async isDashboardVisible() {
    return await this.dashboardHeader.isVisible();
  }
}

module.exports = { LoginPage };
