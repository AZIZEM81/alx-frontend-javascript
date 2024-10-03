import Car from './10-car';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  cloneCar() {
    const Clone = super.constructor[Symbol.species] || super.constructor;
    return new Clone();
  }
}
