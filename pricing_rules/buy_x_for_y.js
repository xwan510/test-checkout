import BaseRule from './base_rule.js';

/*
* E.g buy 3 Apple TVs, you will pay the price of 2.
*/
export default class BuyXForY extends BaseRule {
  constructor(sku, x, y) {
    super();
    this.x = x;
    this.y = y;
    this.sku = sku
    if (y >= x) {
      throw new Error('This rule does not make sense!');
    }
  }

  apply(items) {
    const results = [...items];
    const free_item_number = this.x - this.y;
    const found_item_index = [];

    results.forEach((item, index) => {
      if (item.sku === this.sku && item.discount_applied === false) {
        found_item_index.push(index);
        if (found_item_index.length === this.x) {
          // Setting price free for the x - y number of target items.
          for (let i = 0; i < free_item_number; i++) {
            results[found_item_index[i]].discounted_price = 0;
          }
          // Mark all of target items as discount applied.
          found_item_index.forEach(i => results[i].discount_applied = true);
        }
      }
    });

    return results;
  }
}
