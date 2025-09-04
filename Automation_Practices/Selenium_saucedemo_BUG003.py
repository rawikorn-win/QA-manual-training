from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

import time

options = webdriver.ChromeOptions()
options.add_experimental_option("detach", True)
driver = webdriver.Chrome(options)

driver.get("https://www.saucedemo.com/")
time.sleep(3)
username = driver.find_element(By.ID, "user-name")
username.send_keys("problem_user")
time.sleep(3)
password = driver.find_element(By.ID, "password")
password.send_keys("secret_sauce")
time.sleep(2)
btn = driver.find_element(By.ID, "login-button").click()

WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.CSS_SELECTOR, ".inventory_item button"))
)
time.sleep(5)
Addcart = driver.find_element(By.ID, "add-to-cart-sauce-labs-backpack").click()
time.sleep(2)
cart = driver.find_element(By.XPATH, '//*[@id="shopping_cart_container"]/a').click()
WebDriverWait(driver, 10).until(EC.url_contains("/cart.html"))
checkout = driver.find_element(By.ID, "checkout").click()
###################   Last Name field does not accept input. This Bug-Report is Bug ID:BUG_003    ###################
