import {Page, Locator, expect} from '@playwright/test';

export class LoginCheck {
    readonly page : Page;
    readonly UsernameInput : Locator;
    readonly PasswordInput : Locator;
    readonly Loginbutton : Locator;
    readonly emptycredintials : Locator;
    readonly invalidcredentials : Locator;
    readonly validcreadentials : Locator;

    constructor(page : Page) {
        this.page = page;
        this.UsernameInput = page.getByLabel('ชื่อผู้ใช้');
        this.PasswordInput = page.getByLabel('รหัสผ่าน');
        this.Loginbutton = page.getByRole('button', {name:'เข้าสู่ระบบ'});
        this.emptycredintials = page.getByText('กรุณากรอก Username และ Password ให้ครบถ้วน');
        this.invalidcredentials = page.getByText('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        this.validcreadentials = page.getByText('เข้าสู่ระบบสำเร็จ');
    }

    async goto() {
        await this.page.goto('https://dsl2-uat.dyndns.org/Login');
    }


    async login(user:string, password:string) {
        await this.UsernameInput.fill(user);
        await this.PasswordInput.fill(password);
        await this.Loginbutton.click();
    }

    async CheckLoginempty() {
        await expect(this.emptycredintials).toBeVisible();
    };

    async CheckInvalidError() {
        await expect(this.invalidcredentials).toBeVisible();
    }
    async Validcredentials() {
        await expect(this.validcreadentials).toBeVisible();
    }
 }
