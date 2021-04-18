import BaseItem from './base_item.js';

export default class AppleTV extends BaseItem {
  constructor(sku='atv', name='Apple TV', price=109.50) {
    super(sku, name, price);
  }
}
