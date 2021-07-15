import { browser, by, element } from "protractor";
import BasePage from "./basePage";
class CheckOutStepOnePage extends BasePage {
  constructor() {
    super();
    this.firstName = element(by.id("first-name"));
    this.lastName = element(by.id("last-name"));
    this.zipCode = element(by.id("postal-code"));
    this.continueButton = element(by.id("continue"));
  }
  async fillCheckoutInfo() {
    await this.firstName.sendKeys("standard_user");
    await this.lastName.sendKeys("secret_sauce");
    await this.zipCode.sendKeys("127001");
  }
}
export default new CheckOutStepOnePage();
