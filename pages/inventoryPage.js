import { browser, by, element } from "protractor";
import BasePage from "./basePage";
class InventoryPage extends BasePage {
  constructor() {
    super();
    this.inventoryHeader = element(by.className("title"));
    this.inventoryList = $$(".inventory_item");
    this.addToCartButton = element(by.id("add-to-cart-sauce-labs-backpack"));
    this.removeItemButton = element(by.id("remove-sauce-labs-backpack"));
    this.cartBadge = element(by.className("shopping_cart_badge"));
    this.shoppingCartLink = element(by.className("shopping_cart_link"));
    this.filter = element(by.tagName("select"));
    this.zToA = element(by.cssContainingText("option", "Name (Z to A)"));

    this.highToLow = element(
      by.cssContainingText("option", "Price (low to high)")
    );
  }
}
export default new InventoryPage();
