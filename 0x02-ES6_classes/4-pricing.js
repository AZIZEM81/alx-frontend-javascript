import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new Error('currency must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new Error('newAmount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new Error('newCurrency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.displayFullCurrency()}`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
