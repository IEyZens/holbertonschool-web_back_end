import { Currency } from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('It must be an integer.');
    } else {
      this._amount = amount;
    }

    if (typeof conversionRate !== 'number') {
      throw new TypeError('It must be an integer.');
    } else {
      this._conversionRate = conversionRate;
    }

    return amount * conversionRate;
  }
}
