import BaseItem from './base_item.js';

export default class VGAAdapter extends BaseItem {
  constructor(sku='vga', name='VGA Adapter', price=30.00) {
    super(sku, name, price);
  }
}
