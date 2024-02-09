const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this[cloneCarSymbol] = this.cloneCar.bind(this);
  }

  cloneCar() {
    const { _brand, _motor, _color } = this;
    const clonedCar = new Car(_brand, _motor, _color);
    Object.setPrototypeOf(clonedCar, Object.getPrototypeOf(this));
    return clonedCar;
  }
}
