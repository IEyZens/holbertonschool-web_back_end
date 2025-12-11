export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('It must be an string.');
    }

    if (typeof motor !== 'string') {
      throw new TypeError('It must be an string.');
    }

    if (typeof color !== 'string') {
      throw new TypeError('It must be an string.');
    }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
