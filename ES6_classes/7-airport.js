export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('It must be an string.');
    }

    if (typeof code !== 'string') {
      throw new TypeError('It must be an string.');
    }

    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
