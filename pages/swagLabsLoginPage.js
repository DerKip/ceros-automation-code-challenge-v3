import { browser, by, element } from "protractor";
import BasePage from "./basePage";
class SwaglabsLoginPage extends BasePage {
  constructor() {
    super();
    this.url = "https://www.saucedemo.com";
    this.userName = element(by.id("user-name"));
    this.userPassword = element(by.id("password"));
    this.loginButton = element(by.id("login-button"));
  }
  async pageLoaded() {
    await browser.wait(this.isVisible("#login-button"));
  }
  async login() {
    await this.userName.sendKeys("standard_user");
    await this.userPassword.sendKeys("secret_sauce");
    await this.hitEnter();
  }
}
export default new SwaglabsLoginPage();
