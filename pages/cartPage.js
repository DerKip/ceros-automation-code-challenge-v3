import { browser, by, element } from "protractor";
import BasePage from "./basePage";
class CartPage extends BasePage {
  constructor() {
    super();
    this.checkoutButton = element(by.id("checkout"));
  }
}
export default new CartPage();
