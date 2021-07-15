import { by, element } from "protractor";
import BasePage from "./basePage";
class CheckOutStepTwoPage extends BasePage {
  constructor() {
    super();
    this.finishButton = element(by.id("finish"));
  }
}
export default new CheckOutStepTwoPage();
