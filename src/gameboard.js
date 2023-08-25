const { default: findAdjecentFields } = require('./findAdjecentFields');
const { default: markField } = require('./markField');
const Ship = require('./ship');

class Gameboard {
  constructor() {
    this.fields = this.generateFields();
    this.placeShip([1, 1], new Ship(3), 'h');
    this.placeShip([5, 5], new Ship(2), 'v');
    this.placeShip([10, 8], new Ship(3), 'h');
    this.placeShip([1, 10], new Ship(4), 'v');
    this.placeShip([6, 1], new Ship(5), 'v');
  }

  generateFields() {
    const fields = {};
    for (let i = 1; i <= 10; i += 1) {
      for (let j = 1; j <= 10; j += 1) {
        const array = [i, j];
        fields[array] = null;
      }
    }
    return fields;
  }

  placeShip(position, ship, orientation) {
    const coordinates = [];
    coordinates.push(position);
    for (let i = 1; i < ship.length; i += 1) {
      if (orientation === 'v') {
        coordinates.push([position[0] + i, position[1]]);
      } else {
        coordinates.push([position[0], position[1] + i]);
      }
    }
    if (!coordinates.some((coordinate) => this.fields[coordinate] === undefined)) {
      coordinates.forEach((coordinate) => {
        this.fields[coordinate] = ship;
      });
    }
  }

  recieveAttack(coordinate, board) {
    const field = this.fields[[coordinate]];
    if (field instanceof Ship) {
      this.fields[[coordinate]].hit();
      if (this.fields[[coordinate]].isSunk()) {
        const adjecentFields = findAdjecentFields(coordinate, this.fields);
        adjecentFields.forEach((_field) => {
          const fieldNum = (_field[0] - 1) * 10 + _field[1];
          markField(board.children.item(fieldNum - 1), _field);
          this.fields[[`${_field[0]},${_field[1]}`]] = 'miss';
        });
      }
      this.fields[[coordinate]] = 'hit';
      return 'hit';
    } if (field === null) {
      this.fields[[coordinate]] = 'miss';
      return 'miss';
    }
    return null;
  }

  allShipsSunk() {
    return !Object.values(this.fields).some((value) => value instanceof Ship);
  }
}

module.exports = Gameboard;
