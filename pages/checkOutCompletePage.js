import { browser, by, element } from "protractor";
import BasePage from "./basePage";
class CheckOutCompletePage extends BasePage {
  constructor() {
    super();
    this.completeHeader = element(by.className("complete-header"));
    this.backButton = element(by.id("back-to-products"));
  }
}
export default new CheckOutCompletePage();
