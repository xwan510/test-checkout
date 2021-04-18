export default class Checkout {
  constructor(pricingRules=[]) {
    this.pricingRules = pricingRules;
    this.items = [];
  }

  scan(item){
    this.items.push(item);
    this.pricingRules.forEach(rule => {
      this.items = rule.apply(this.items);
    });
  }

  total(){
    let total = 0;
    this.items.forEach(item => {
      total += item.discounted_price;
    });
    console.log(this.items);
    console.log('Total is $' + total);
    return total;
  }
}
