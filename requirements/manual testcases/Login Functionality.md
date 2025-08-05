# Manual Test Cases for Login Functionality

## TC-LOGIN-01: Successful Login with Valid Credentials
**Related Feature:** Login Functionality  
**Precondition:** User is registered and on the login page.  

**Test Steps:**
1. Enter a valid email in the Email field.
2. Enter a valid password in the Password field.
3. Click the Login button.

**Expected Result:**  
User is redirected to the CRM dashboard (https://ui.cogmento.com/home) without any error message.

**Postcondition:**  
User session is active and user is logged in.

**Priority:** High  
**Tags:** login, positive, dashboard

---

## TC-LOGIN-02: Login with Invalid Password
**Related Feature:** Login Functionality  
**Precondition:** User is registered and on the login page.  

**Test Steps:**
1. Enter a valid email in the Email field.
2. Enter an invalid password in the Password field.
3. Click the Login button.

**Expected Result:**  
An error message is displayed in a red alert box. User remains on the login page.

**Postcondition:**  
User is not logged in.

**Priority:** High  
**Tags:** login, negative, error-message

---

## TC-LOGIN-03: Login with Invalid Email
**Related Feature:** Login Functionality  
**Precondition:** User is on the login page.  

**Test Steps:**
1. Enter an invalid email in the Email field.
2. Enter a valid password in the Password field.
3. Click the Login button.

**Expected Result:**  
An error message is displayed in a red alert box. User remains on the login page.

**Postcondition:**  
User is not logged in.

**Priority:** High  
**Tags:** login, negative, error-message

---

## TC-LOGIN-04: Login with Blank Email and Password
**Related Feature:** Login Functionality  
**Precondition:** User is on the login page.  

**Test Steps:**
1. Leave the Email field blank.
2. Leave the Password field blank.
3. Click the Login button.

**Expected Result:**  
An error message is displayed in a red alert box. User remains on the login page.

**Postcondition:**  
User is not logged in.

**Priority:** High  
**Tags:** login, negative, blank-fields

---

## TC-LOGIN-05: Login with Blank Email Only
**Related Feature:** Login Functionality  
**Precondition:** User is on the login page.  

**Test Steps:**
1. Leave the Email field blank.
2. Enter a valid password in the Password field.
3. Click the Login button.

**Expected Result:**  
An error message is displayed in a red alert box. User remains on the login page.

**Postcondition:**  
User is not logged in.

**Priority:** High  
**Tags:** login, negative, blank-email

---

## TC-LOGIN-06: Login with Blank Password Only
**Related Feature:** Login Functionality  
**Precondition:** User is on the login page.  

**Test Steps:**
1. Enter a valid email in the Email field.
2. Leave the Password field blank.
3. Click the Login button.

**Expected Result:**  
An error message is displayed in a red alert box. User remains on the login page.

**Postcondition:**  
User is not logged in.

**Priority:** High  
**Tags:** login, negative, blank-password

---

## TC-LOGIN-07: Login with Leading/Trailing Whitespaces in Email and Password
**Related Feature:** Login Functionality  
**Precondition:** User is on the login page.  

**Test Steps:**
1. Enter a valid email with leading/trailing whitespaces in the Email field.
2. Enter a valid password with leading/trailing whitespaces in the Password field.
3. Click the Login button.

**Expected Result:**  
Whitespaces are trimmed and login is successful. User is redirected to the dashboard.

**Postcondition:**  
User is logged in.

**Priority:** Medium  
**Tags:** login, whitespace, positive

---

## TC-LOGIN-08: Login with Invalid Email Format
**Related Feature:** Login Functionality  
**Precondition:** User is on the login page.  

**Test Steps:**
1. Enter an invalid email format (e.g., "user@com") in the Email field.
2. Enter a valid password in the Password field.
3. Click the Login button.

**Expected Result:**  
No frontend validation error, but login fails and an error message is displayed in a red alert box.

**Postcondition:**  
User is not logged in.

**Priority:** Medium  
**Tags:** login, negative, email-format

---

## TC-LOGIN-09: Session Persistence After Login
**Related Feature:** Login Functionality  
**Precondition:** User is logged in and on the dashboard.  

**Test Steps:**
1. Log in successfully.
2. Refresh the browser or reopen the dashboard URL.

**Expected Result:**  
User remains logged in and on the dashboard.

**Postcondition:**  
Session persists until user logs out.

**Priority:** Medium  
**Tags:** login, session, persistence

---

## TC-LOGIN-10: Error Message Display for Failed Login
**Related Feature:** Login Functionality  
**Precondition:** User is on the login page.  

**Test Steps:**
1. Attempt to log in with invalid credentials.

**Expected Result:**  
An error message such as "Something went wrong..." is displayed in a red alert box.

**Postcondition:**  
User is not logged in.

**Priority:** High  
**Tags:** login, error-message, negative

---
