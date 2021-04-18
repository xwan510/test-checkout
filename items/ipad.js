import BaseItem from './base_item.js';

export default class Ipad extends BaseItem {
  constructor(sku='ipd', name='Super Ipad', price=549.99) {
    super(sku, name, price);
  }
}
