import swaglabsLoginPage from "../pages/swagLabsLoginPage.js";
import inventoryPage from "../pages/inventoryPage.js";
import cartPage from "../pages/cartPage.js";
import checkOutStepOnePage from "../pages/checkOutStepOnePage.js";
import checkOutStepTwoPage from "../pages/checkOutStepTwoPage.js";
import checkOutCompletePage from "../pages/checkOutCompletePage.js";
import { browser, element } from "protractor";

describe("Swag Labs tests", () => {
  beforeAll(async () => {
    await swaglabsLoginPage.goto();
  });

  it("should log in with standard user", async () => {
    await swaglabsLoginPage.login();
    expect(await inventoryPage.inventoryHeader.getText()).toEqual("PRODUCTS");
  });

  it("should add an item to the cart", async () => {
    await inventoryPage.addToCartButton.click();
    expect(inventoryPage.cartBadge.getText()).toBe(1);
  });

  it("should remove an item in the cart", async () => {
    await inventoryPage.removeItemButton.click();
    expect(inventoryPage.cartBadge.isPresent()).toBe(false);
  });

  it("should have 6 items on the inventory page", async () => {
    expect(inventoryPage.inventoryList.count()).toBe(6);
  });

  it("should complete the purchase process of an item from the inventory", async () => {
    await inventoryPage.addToCartButton.click();
    await inventoryPage.shoppingCartLink.click();
    await cartPage.checkoutButton.click();
    await checkOutStepOnePage.fillCheckoutInfo();
    await checkOutStepOnePage.continueButton.click();
    await checkOutStepTwoPage.finishButton.click();
    expect(checkOutCompletePage.completeHeader.getText()).toEqual(
      "THANK YOU FOR YOUR ORDER"
    );
  });

  // //   BONUS tests! Not required for the automation challenge, but do these if you can.

  it("sort the inventory items by price, high-to-low", async () => {
    await checkOutCompletePage.backButton.click();
    await inventoryPage.filter.click();
    await browser.sleep(2000);
    await inventoryPage.highToLow.click();

    const prices = await inventoryPage.getPrices();
    const sorted = [...prices].sort((a, b) => {
      a - b;
    });
    // Verify sorting from high to low
    expect(prices).toEqual(sorted);
  });

  it("sort the inventory items by name, Z-to-A", async () => {
    await inventoryPage.filter.click();
    await browser.sleep(2000);
    await inventoryPage.zToA.click();

    const titles = await inventoryPage.allItemTitles.getText();
    const sorted = titles.sort().reverse();

    // Verify sorting from Z to A
    expect(titles).toEqual(sorted);
  });
});
