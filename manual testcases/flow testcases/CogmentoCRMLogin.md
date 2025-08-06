# Cogmento CRM Login Feature - Manual Test Cases

## TC001: Successful Login with Valid Credentials
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User has valid registered credentials and is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page (https://ui.cogmento.com/)
2. Enter valid email address in the Email field
3. Enter valid password in the Password field
4. Click the Login button

**Expected Result:**  
- User is redirected to the CRM dashboard (https://ui.cogmento.com/home)
- No error messages are displayed
- Session is established and persists

**Postcondition:**  
User is logged in and can access CRM functionalities

**Priority:** High  
**Tags:** login, authentication, positive-test, smoke-test

---

## TC002: Failed Login with Invalid Email
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Enter invalid email address in the Email field
3. Enter valid password in the Password field
4. Click the Login button

**Expected Result:**  
- Error message "Something went wrong..." is displayed in a red alert box
- User remains on the login page
- No redirection occurs

**Postcondition:**  
User remains on login page with error message displayed

**Priority:** High  
**Tags:** login, authentication, negative-test, validation

---

## TC003: Failed Login with Invalid Password
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Enter valid email address in the Email field
3. Enter incorrect password in the Password field
4. Click the Login button

**Expected Result:**  
- Error message "Something went wrong..." is displayed in a red alert box
- User remains on the login page
- No redirection occurs

**Postcondition:**  
User remains on login page with error message displayed

**Priority:** High  
**Tags:** login, authentication, negative-test, validation

---

## TC004: Failed Login with Empty Email Field
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Leave the Email field empty
3. Enter valid password in the Password field
4. Click the Login button

**Expected Result:**  
- Error message "Something went wrong..." is displayed in a red alert box
- User remains on the login page
- No redirection occurs

**Postcondition:**  
User remains on login page with error message displayed

**Priority:** High  
**Tags:** login, authentication, negative-test, validation, required-fields

---

## TC005: Failed Login with Empty Password Field
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Enter valid email address in the Email field
3. Leave the Password field empty
4. Click the Login button

**Expected Result:**  
- Error message "Something went wrong..." is displayed in a red alert box
- User remains on the login page
- No redirection occurs

**Postcondition:**  
User remains on login page with error message displayed

**Priority:** High  
**Tags:** login, authentication, negative-test, validation, required-fields

---

## TC006: Failed Login with Both Fields Empty
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Leave both Email and Password fields empty
3. Click the Login button

**Expected Result:**  
- Error message "Something went wrong..." is displayed in a red alert box
- User remains on the login page
- No redirection occurs

**Postcondition:**  
User remains on login page with error message displayed

**Priority:** High  
**Tags:** login, authentication, negative-test, validation, required-fields

---

## TC007: Login with Email Containing Leading/Trailing Whitespaces
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Enter valid email with leading and trailing spaces (e.g., " user@example.com ")
3. Enter valid password in the Password field
4. Click the Login button

**Expected Result:**  
- Whitespaces are trimmed and user is successfully logged in
- User is redirected to the CRM dashboard (https://ui.cogmento.com/home)
- No error messages are displayed

**Postcondition:**  
User is logged in successfully

**Priority:** Medium  
**Tags:** login, authentication, whitespace-handling, validation

---

## TC008: Login with Password Containing Leading/Trailing Whitespaces
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Enter valid email address in the Email field
3. Enter valid password with leading and trailing spaces (e.g., " password123 ")
4. Click the Login button

**Expected Result:**  
- Whitespaces are trimmed and user is successfully logged in
- User is redirected to the CRM dashboard (https://ui.cogmento.com/home)
- No error messages are displayed

**Postcondition:**  
User is logged in successfully

**Priority:** Medium  
**Tags:** login, authentication, whitespace-handling, validation

---

## TC009: Login with Invalid Email Format
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Enter invalid email format (e.g., "invalidemail", "user@", "@domain.com")
3. Enter valid password in the Password field
4. Click the Login button

**Expected Result:**  
- Login fails silently without frontend validation
- Error message "Something went wrong..." is displayed in a red alert box
- User remains on the login page

**Postcondition:**  
User remains on login page with error message displayed

**Priority:** Medium  
**Tags:** login, authentication, negative-test, email-validation

---

## TC010: Verify Forgot Password Link Functionality
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Locate the "Forgot your password?" link
3. Click on the "Forgot your password?" link

**Expected Result:**  
- User is navigated to the password reset page
- Password reset functionality is accessible

**Postcondition:**  
User is on the password reset page

**Priority:** Medium  
**Tags:** login, password-reset, navigation, functionality

---

## TC011: Verify Sign Up Link Functionality
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User is on the login page (https://ui.cogmento.com/)  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Locate the "Sign Up" link
3. Click on the "Sign Up" link

**Expected Result:**  
- User is navigated to the registration/sign up page
- Registration functionality is accessible

**Postcondition:**  
User is on the registration page

**Priority:** Medium  
**Tags:** login, registration, navigation, functionality

---

## TC012: Session Persistence After Successful Login
**Related Feature:** Cogmento CRM Login Functionality  
**Precondition:** User has valid credentials and is on the login page  

**Test Steps:**
1. Navigate to the Cogmento CRM login page
2. Enter valid credentials and login successfully
3. Navigate to different pages within the CRM
4. Close and reopen the browser
5. Navigate back to the CRM URL

**Expected Result:**  
- Session persists across page navigation
- User remains logged in after browser restart (if session not manually terminated)
- No need to login again unless session expires

**Postcondition:**  
User session is maintained appropriately

**Priority:** Medium  
**Tags:** login, session-management, persistence, security

---
