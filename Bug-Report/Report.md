## Bug-Report Test#1

**Bug ID:** BUG_001  
**Title:** Register accepts the same Username  
**Reporter:** Rawikorn  
**Date:** 04 September 2025  
**Severity:** Major  
**Priority:** High  
**Environment:** Chrome v120, Windows 10  
**Precondition:** System has the same username that already sign-up. Username: rerere

**Steps to Reproduce:**  
1. Go to the https://www.demoblaze.com/
2. Navigate to Register page
3. Enter "rerere" in username field
4. Fill other fields with valid data
5. Click Sign Up

**Expected Result:**  
System should display an error: “This username is already taken.”

**Actual Result:**  
System accepts the duplicate username.

**Attachment:**  
N/A

---

**Bug ID:** BUG_002  
**Title:** System allows registration with invalid password format  
**Reporter:** Rawikorn  
**Date:** 04 September 2025  
**Severity:** Major  
**Priority:** High  
**Environment:** Chrome v120, Windows 10  
**Precondition:** System has valid username format and invalid password format, Password: PassWord345--

**Steps to Reproduce:**  
1. Go to the https://www.demoblaze.com/
2. Navigate to Register page
3. Enter "PassWord345--" in password format
4. Fill other fields with valid data
5. Click Sign Up

**Expected Result:**  
System should display an error: “Password should not contain special characters.”

**Actual Result:**  
System accepts the invalid password and proceeds to the OTP verification page.

**Attachment:**  
N/A

---

**Bug ID:** BUG_003  
**Title:** Checkout: Unable to input Last Name field
**Reporter:** Rawikorn  
**Date:** 04 September 2025  
**Severity:** Critical  
**Priority:** High  
**Environment:** Chrome v120, Windows 10  
**Precondition:** User has valid First Name, Last Name, Postal code

**Steps to Reproduce:**  
1. Go to the https://www.saucedemo.com/
2. Enter valid username "problem_user" and valid password "secret_sauce"
3. Click Sign in
4. User goes to inventory site
5. Add Sauce Labs Backpack to cart
6. Click cart icon and checkout
7. Enter valid First Name, Last Name and Postal code

**Expected Result:**  
User successfully fill the First Name, Last Name and Postal code

**Actual Result:**  
Last Name field does not accept input. When typing in Last Name, the First Name field is cleared and replaced with the typed character.

**Attachment:**  
Before fill Lastname  
<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/9ad7cbee-de81-4f73-a782-16a431063482" />  
After typed"L"Character in Last Name field  
<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/b4c1894e-29c6-4ac5-82db-d16ae6246507" />





---
