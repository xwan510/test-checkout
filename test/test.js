import assert from 'assert';
import Checkout from '../checkout.js';
import { AppleTV, MacBookPro, IPad, VGAAdapter } from '../items/index.js';
import { BuyXForY, BulkDiscount, BuyXFreeY } from '../pricing_rules/index.js';

describe('Apply Discounts', function() {
  describe('# 3 for 2 deal on Apple TVs', function() {
    it('should get 1 TV free', function() {
      const pricingRules = [
        new BuyXForY('atv', 3, 2),
      ];

      const items = [
        new AppleTV(),
        new AppleTV(),
        new AppleTV(),
      ]

      const checkout = new Checkout(pricingRules);
      items.forEach(item => checkout.scan(item));
      const total = checkout.total();
      // 2 * 109.50 = 219
      assert.equal(219, total);
    });
  });


  describe('# bulk discount on 4 ipads, 499.99 each', function() {
    it('each should be 499.99', function() {
      const pricingRules = [
        new BulkDiscount('ipd', 449.99, 4),
      ];

      const items = [
        new IPad(),
        new IPad(),
        new IPad(),
        new IPad(),
        new IPad(),
      ]

      const checkout = new Checkout(pricingRules);
      items.forEach(item => checkout.scan(item));
      const total = checkout.total();
      // 5 * 449.99 = 2249.95
      assert.equal(2249.95, total);
    });
  });


  describe('# a free VGA adapter with every MacBook Pro', function() {
    it('one VGA free and the other one not free', function() {
      const pricingRules = [
        new BuyXFreeY('mbp', 'vga')
      ];

      const items = [
        new MacBookPro(),
        new VGAAdapter(),
        new VGAAdapter(),
      ]

      const checkout = new Checkout(pricingRules);
      items.forEach(item => checkout.scan(item));
      const total = checkout.total();
      // 1 macbook 1399.99 + 1 vga 30.00 = 1429.99
      assert.equal(1429.99, total);
    });
  });

});
