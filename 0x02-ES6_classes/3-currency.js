// Currency class

export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    }
    if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new Error('newCode must be a string');
    }
    this.code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('newName must be a string');
    }
    this.name = newName;
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}
