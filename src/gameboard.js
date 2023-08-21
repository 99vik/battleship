const Ship = require('./ship');

class Gameboard {
  constructor() {
    this.fields = this.generateFields();
    // this.placeShip([10, 9], new Ship(3), 'h');
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
    if (coordinates.some((coordinate) => this.fields[coordinate] === undefined)) {
      console.log('Cant place ship');
    } else {
      coordinates.forEach((coordinate) => {
        this.fields[coordinate] = ship;
      });
    }
  }
}

module.exports = Gameboard;
