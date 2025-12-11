export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('It must be an integer.');
    }

    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
