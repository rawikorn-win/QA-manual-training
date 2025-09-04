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
