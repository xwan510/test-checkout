export default class BaseRule {
  constructor() {
    if(!this.apply) {
      throw new Error('Rule must have apply method!');
    }
  }
}
