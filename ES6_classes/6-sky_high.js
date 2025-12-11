import { Building } from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('It must be an integer.');
    }

    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
