import { Locator, Page } from "@playwright/test";
import { test, expect } from "@playwright/test";

export class LoginPage {

    private readonly usernameTextBox: Locator;
    private readonly passwordTextBox: Locator;
    private readonly loginButton: Locator;
    private readonly shoppingCartIcon: Locator;

    constructor(page: Page){
       this.usernameTextBox = page.getByRole('textbox', {name: 'Username'})
       this.passwordTextBox = page.getByRole('textbox', {name: 'Password'})
       this.loginButton = page.getByRole('button', {name: 'Login'})
       this.shoppingCartIcon = page.locator("xpath=//div[@class=\'shopping_cart_container\']")
    }

    async fillUsername(username:string){
        await this.usernameTextBox.fill(username);
    }
    async fillPassword(password:string){
        await this.passwordTextBox.fill(password);
    }
    async clickOnLogin(){
        await this.loginButton.click();
    }

    async loginWithCredentials(username:string, password:string){
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.clickOnLogin()
    }
    async checkSuccessfulLogin(){
        await expect(this.shoppingCartIcon).toBeVisible();
    }

}