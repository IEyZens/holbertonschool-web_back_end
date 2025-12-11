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

  get size() {
    if (HolbertonClass === parseInt) {
      return size;
    }
  }

  get location() {
    if (HolbertonClass === toString) {
      return location;
    }
  }
}
