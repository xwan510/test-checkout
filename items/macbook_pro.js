import BaseItem from './base_item.js';

export default class MacBookPro extends BaseItem {
  constructor(sku='mbp', name='MacBook Pro', price=1399.99) {
    super(sku, name, price);
  }
}
