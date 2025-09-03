## **Test case#1: Facebook Register**

**Test Case ID:** FACEBOOK_Register_001  
**Title:** Verify Facebook Register  
**Precondition:** User has a valid email: testest123123@gmail.com  
**Steps to Reproduce:**
1. Enter Facebook register site 
2. Enter valid First and Last name
3. Select valid date of birth
4. Select gender
5. Enter a valid email address
6. Enter a password
7. Click Sign up
8. Retrieve OTP from the email
9. Enter OTP

**Expected Result:**  
User successfully create and OTP is validated successfully and user direct to dashboard

**Actual Result:**  
User successfully create and OTP is validated successfully and user direct to dashboard

---

**Test Case ID:** FACEBOOK_Register_002
**Title:** Verify Facebook register with invalid data
**Precondition:** User has an invalid email format, email: randomtest@tester.com
Steps to Reproduce:
1. Enter Facebook register site 
2. Enter valid First and Last name
3. Select gender
4. Enter a invalid email address
5. Enter a password
6. Click Sign up

**Expected Result:**
User can't register and system shows Please enter an valid email address.

**Actual Result:**
User can't register and system shows Please enter an valid email address.

---
