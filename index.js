import Checkout from './checkout.js';
import { AppleTV, MacBookPro, IPad, VGAAdapter } from './items/index.js';
import { BuyXForY, BulkDiscount, BuyXFreeY } from './pricing_rules/index.js';

const pricingRules = [
    new BuyXForY('atv', 3, 2),
    new BulkDiscount('ipd', 449.99, 4),
    new BuyXFreeY('mbp', 'vga')
];

const items = [
    new AppleTV(),
    new AppleTV(),
    new AppleTV(),
    new IPad(),
    new IPad(),
    new IPad(),
    new IPad(),
    new MacBookPro(),
    new VGAAdapter(),
    new VGAAdapter(),
]


const checkout = new Checkout(pricingRules);
items.forEach(item => checkout.scan(item));
checkout.total();