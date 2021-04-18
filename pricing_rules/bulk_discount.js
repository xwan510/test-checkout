import BaseRule from './base_rule.js';

/*
* E.g price will drop to $499.99 each, if someone buys more than 4.
*/
export default class BulkDiscount extends BaseRule {
  constructor(sku, discounted_price, threshold=4) {
    super();
    this.discounted_price = discounted_price;
    this.sku = sku;
    this.threshold = threshold;
  }

  apply(items) {
    const results = [...items];
    const found_item_index = [];

    results.forEach((item, index) => {
      if (item.sku === this.sku) {
        found_item_index.push(index);
        if (found_item_index.length >= this.threshold) {
          // Setting discounted price for target items.
          for (let i = 0; i < found_item_index.length; i++) {
            results[found_item_index[i]].discounted_price = this.discounted_price;
          }
          // Mark all of target items as discount applied.
          found_item_index.forEach(i => results[i].discount_applied = true);
        }
      }
    });

    return results;
  }
}
