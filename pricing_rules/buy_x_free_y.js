import BaseRule from './base_rule.js';

/*
* E.g a free VGA adapter with every MacBook Pro sold.
*/
export default class BuyXFreeY extends BaseRule {
  constructor(sku1, sku2) {
    super();
    this.sku1 = sku1
    this.sku2 = sku2
  }

  apply(items) {
    const results = [...items];
    results.forEach((item1, index) => {
      if (item1.sku === this.sku1 && item1.discount_applied === false) {
        results.forEach((item2, index) => {
          if (item2.sku === this.sku2 && item2.discount_applied === false) {
            item1.discount_applied = true;
            item2.discount_applied = true;
            item2.discounted_price = 0;
          }
        });
      }
    });

    return results;
  }
}
