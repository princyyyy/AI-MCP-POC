const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { validEmail, validPassword, invalidEmail, invalidPassword } = require('../testData/credentials.json');

// Helper for whitespace test
const withWhitespace = (str) => `  ${str}  `;

test.describe('Cogmento CRM Login Functionality', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC-LOGIN-01: Successful Login with Valid Credentials', async ({ page }) => {
    await loginPage.login(validEmail, validPassword);
    await expect(loginPage.dashboardHeader).toBeVisible();
  });

  test('TC-LOGIN-02: Login with Invalid Password', async ({ page }) => {
    await loginPage.login(validEmail, invalidPassword);
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-03: Login with Invalid Email', async ({ page }) => {
    await loginPage.login(invalidEmail, validPassword);
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-04: Login with Blank Email and Password', async ({ page }) => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-05: Login with Blank Email Only', async ({ page }) => {
    await loginPage.login('', validPassword);
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-06: Login with Blank Password Only', async ({ page }) => {
    await loginPage.login(validEmail, '');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-07: Login with Leading/Trailing Whitespaces in Email and Password', async ({ page }) => {
    await loginPage.login(withWhitespace(validEmail), withWhitespace(validPassword));
    await expect(loginPage.dashboardHeader).toBeVisible();
  });

  test('TC-LOGIN-08: Login with Invalid Email Format', async ({ page }) => {
    await loginPage.login('user@com', validPassword);
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('TC-LOGIN-09: Session Persistence After Login', async ({ page, context }) => {
    await loginPage.login(validEmail, validPassword);
    await expect(loginPage.dashboardHeader).toBeVisible();
    // Refresh and check session
    await page.reload();
    await expect(loginPage.dashboardHeader).toBeVisible();
  });

  test('TC-LOGIN-10: Error Message Display for Failed Login', async ({ page }) => {
    await loginPage.login(invalidEmail, invalidPassword);
    await expect(loginPage.errorMessage).toBeVisible();
    const errorText = await loginPage.getErrorMessage();
    expect(errorText).toContain('Something went wrong');
  });
});
