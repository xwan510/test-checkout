export default class BaseItem {
  constructor(sku, name, price) {
    this.discount_applied = false;
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.discounted_price = price;
  }
}
