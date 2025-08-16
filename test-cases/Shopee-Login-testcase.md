Test case#1: Shopee Login

Test Case ID: SHOPEE_LOGIN_001
Title: Verify shopee login
Precondition: User already has account to login

Step to reproduce:
1.Enter Shopee website
2.Enter valid Email/Username/phone number
3.Enter valid password
4.Click Login Button

Expected Result:
User successfully logged in
show Shopee home page


Test Case ID: SHOPEE_LOGIN_002
Title: Verify shopee login with invalid username

Step to reproduce:
1.Enter Shopee website
2.Enter incorrect Email/Username/phone number
3.Enter valid password
4.Click Login Button

Expected Result:
System show *Invalid username or password please try again*
User remains in login page


Test Case ID: SHOPEE_LOGIN_003
Title: Verify shopee login with invalid password

Step to reproduce:
1.Enter Shopee website
2.Enter vaid Email/Username/phone number
3.Enter incorrect password
4.Click Login Button

Expected Result:
System show *Invalid username or password please try again*
User remains in login page
----------------------------------------------------------------------------------------------------------------------------------------------------------

Test Case ID: SHOPEE_LOGIN_QR_001
Title: Use QR code to login and confirm
Precondition: User has account and logged in Shopee app install

Step to reproduce:
1.Enter Shopee website
2.Click QR code button to scan one-time login QR code
3.Use mobile phone to scan QR code
4.Confirm login in mobile phone

Expected Result:
User successfully logged in
show Shopee home page


Test Case ID: SHOPEE_LOGIN_QR_002
Title: Use QR code to login and cancle login
Precondition: User has account and logged in Shopee app install

Step to reproduce:
1.Enter Shopee website
2.Click QR code button to scan one-time login QR code
3.Use mobile phone to scan QR code
4.Cancle login in shopee app in mobile phone

Expected Result:
User remains in login QR page
User need to refresh for new QR code


Test Case ID: SHOPEE_LOGIN_QR_003
Title: Use QR code to login but user doesn't have Shopee app
Precondition: User doesn't have Shopee app installed

Step to reproduce:
1.Enter Shopee website
2.Click QR code button to scan one-time login QR code
3.Use mobile phone to scan QR code

Expected Result:
404 It looks like something is missing!
User cannot process to login
User need to click *Back to main website* button


