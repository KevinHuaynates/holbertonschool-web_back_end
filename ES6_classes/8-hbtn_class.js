// 8-hbtn_class.js
class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }

    return this._location; // Eliminamos el else y dejamos solo el return
  }
}

export default HolbertonClass;
