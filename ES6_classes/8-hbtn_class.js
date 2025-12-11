export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('It must be an integer.');
    }

    if (typeof location !== 'string') {
      throw new TypeError('It must be an string.');
    }

    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this._location;
    } else if (hint === 'number') {
      return this._size;
    } else {
      return this._location;
    }
  }
}
