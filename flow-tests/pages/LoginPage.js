class LoginPage {
  constructor(page) {
    this.page = page;
    
    // Real selectors extracted from live DOM
    this.emailField = page.locator('input[name="email"]');
    this.passwordField = page.locator('input[name="password"]');
    this.loginButton = page.locator('.ui.fluid.large.blue.submit.button');
    this.errorMessage = page.locator('.ui.negative.message');
    this.forgotPasswordLink = page.locator('a:has-text("Forgot your password?")');
    this.signUpLink = page.locator('a:has-text("Sign Up")');
    
    // Dashboard elements (after successful login)
    this.dashboardHeader = page.locator('h1, .dashboard-header, [class*="dashboard"], [class*="home"]');
  }

  async navigateToLoginPage() {
    await this.page.goto('https://ui.cogmento.com/');
    await this.page.waitForLoadState('networkidle');
  }

  async login(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async loginWithWhitespace(email, password) {
    // Add leading/trailing spaces to test trimming
    await this.emailField.fill(` ${email} `);
    await this.passwordField.fill(` ${password} `);
    await this.loginButton.click();
  }

  async fillEmail(email) {
    await this.emailField.fill(email);
  }

  async fillPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async getErrorMessage() {
    await this.page.waitForTimeout(3000); // Wait for error message to appear
    if (await this.errorMessage.count() > 0) {
      return await this.errorMessage.textContent();
    }
    return null;
  }

  async isErrorMessageVisible() {
    await this.page.waitForTimeout(3000);
    return await this.errorMessage.count() > 0 && await this.errorMessage.isVisible();
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async isDashboardVisible() {
    // Check if we're redirected to dashboard/home page
    return this.page.url().includes('/home') || this.page.url().includes('dashboard');
  }

  async clickForgotPassword() {
    await this.forgotPasswordLink.click();
  }

  async clickSignUp() {
    await this.signUpLink.click();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async getPageTitle() {
    return await this.page.title();
  }
}

module.exports = LoginPage;
