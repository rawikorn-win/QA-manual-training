import {test , expect} from '@playwright/test';
import { LoginCheck } from './pages/AVA_login';

test.use({ ignoreHTTPSErrors: true });

test.beforeEach(async ({page}) =>{
    await page.goto('https://dsl2-uat.dyndns.org/Login');
})

test('Valid login', async ({page}) => {
    const login = new LoginCheck(page);

    await login.login('pge','1234');
    await login.Validcredentials();
});

test('invalid credentials', async ({page}) => {
    const login = new LoginCheck(page);

    await login.login('fortest','ใช้ทดสอบ');
    await page.getByRole('button').first().click();
    await login.CheckInvalidError();
});

test('empty credentials', async ({page}) => {

    const login = new LoginCheck(page);

    await login.login('','');
    await login.CheckLoginempty();
})
