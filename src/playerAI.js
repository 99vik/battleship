const Player = require('./player');
const Ship = require('./ship');

class PlayerAI extends Player {
  constructor() {
    super();
    this.misses = [];
    this.hits = [];
  }

  removeShipFields(shipFields, fields) {
    return fields.filter((field) => {
      if (!shipFields.some((shipField) => shipField[0] === field[0]
         && shipField[1] === field[1])) {
        return true;
      }
      return false;
    });
  }

  removeReduntantFields(fields) {
    const cleanedFields = [];
    fields.forEach((field) => {
      if (!cleanedFields.some((cleanedField) => cleanedField[0] === field[0]
         && cleanedField[1] === field[1])) {
        cleanedFields.push(field);
      }
    });
    return cleanedFields;
  }

  addAdjecentFields(field) {
    const row = field[0];
    const col = field[1];
    return [[row + 1, col], [row, col + 1],
      [row + 1, col + 1], [row - 1, col],
      [row, col - 1], [row - 1, col - 1],
      [row - 1, col + 1], [row + 1, col - 1]];
  }

  removeOuterFields(fields) {
    const cleanedFields = fields.filter((field) => {
      if (field[0] >= 1 && field[0] <= 10 && field[1] >= 1 && field[1] <= 10) {
        return true;
      }
      return false;
    });
    return cleanedFields;
  }

  getAdjecentFields(shipFields) {
    let adjecentFields = [];

    shipFields.forEach((field) => {
      adjecentFields.push(this.addAdjecentFields(field));
    });
    adjecentFields = this.removeOuterFields(adjecentFields.flat());
    adjecentFields = this.removeReduntantFields(adjecentFields);
    adjecentFields = this.removeShipFields(shipFields, adjecentFields);

    return adjecentFields;
  }

  shipPlacementValid(coordinate, shipRotation, length) {
    const shipFields = [];
    const rowNum = Number(coordinate[0]);
    const colNum = Number(coordinate[1]);
    if (shipRotation === 'h') {
      for (let i = colNum; i < (colNum + length); i += 1) {
        shipFields.push([rowNum, i]);
      }
    } else {
      for (let i = rowNum; i < (rowNum + length); i += 1) {
        shipFields.push([i, colNum]);
      }
    }
    if (shipFields.some((field) => field[0] < 1
    || field[0] > 10 || field[1] < 1 || field[1] > 10)) {
      return false;
    }

    if (shipFields.some((shipField) => this.takenFields
      .some((takenField) => shipField[0] === takenField[0]
      && shipField[1] === takenField[1]))) {
      return false;
    }
    shipFields.forEach((field) => {
      this.takenFields.push(field);
    });
    const adjecentFields = this.getAdjecentFields(shipFields);
    adjecentFields.forEach((field) => {
      this.takenFields.push(field);
    });
    return true;
  }

  generateRandomShipPlacement(length) {
    const randRow = Math.floor(Math.random() * 10) + 1;
    const randCol = Math.floor(Math.random() * 10) + 1;
    const coordinate = [randRow, randCol];
    const rotations = ['v', 'h'];
    const shipRotation = rotations[Math.floor(Math.random() * rotations.length)];
    if (this.shipPlacementValid(coordinate, shipRotation, length)) {
      return this.board.placeShip(coordinate, new Ship(length), shipRotation);
    }
    return this.generateRandomShipPlacement(length);
  }

  placeShips() {
    this.takenFields = [];
    const ships = [5, 4, 3, 3, 2];
    ships.forEach((length) => {
      this.generateRandomShipPlacement(length);
    });
  }

  takeShot(playerFields) {
    const values = Object.keys(this.board.fields);
    let randomField = values[Math.floor(Math.random() * values.length)];
    if (this.hits.length > 0) {
      randomField = this.shootAdjecent(playerFields);
    }
    if (playerFields[randomField] === 'miss' || playerFields[randomField] === 'hit') {
      return this.takeShot(playerFields);
    }
    return randomField;
  }

  shootAdjecent(playerFields) {
    let selectedShot;
    if (this.hits.length === 1) {
      const field = this.hits[0];
      const rowNum = Number(field[0]);
      const colNum = Number(field[1]);
      if (playerFields[`${rowNum + 1},${colNum}`] !== 'miss' && playerFields[`${rowNum + 1},${colNum}`] !== 'hit' && rowNum + 1 <= 10) {
        selectedShot = `${rowNum + 1},${colNum}`;
      } if (playerFields[`${rowNum - 1},${colNum}`] !== 'miss' && playerFields[`${rowNum - 1},${colNum}`] !== 'hit' && rowNum - 1 >= 1) {
        selectedShot = `${rowNum - 1},${colNum}`;
      } if (playerFields[`${rowNum},${colNum + 1}`] !== 'miss' && playerFields[`${rowNum},${colNum + 1}`] !== 'hit' && colNum + 1 <= 10) {
        selectedShot = `${rowNum},${colNum + 1}`;
      } if (playerFields[`${rowNum},${colNum - 1}`] !== 'miss' && playerFields[`${rowNum},${colNum - 1}`] !== 'hit' && colNum - 1 >= 1) {
        selectedShot = `${rowNum},${colNum - 1}`;
      }
    } else {
      const rowSorted = this.hits
        .map((coordinate) => [Number(coordinate[0]), Number(coordinate[1])])
        .sort((a, b) => a[0] - b[0]);
      const colSorted = this.hits
        .map((coordinate) => [Number(coordinate[0]), Number(coordinate[1])])
        .sort((a, b) => a[1] - b[1]);
      // if (rowSorted[0][0] === rowSorted[1][0]) {
      //   rowNumFirst = colSorted[0][0];
      //   colNumFirst = colSorted[0][1];
      //   colNumSecond = colSorted[colSorted.length - 1][1];
      // } else {
      //   colNumFirst = rowSorted[0][0];
      //   rowNumFirst = rowSorted[0][1];
      //   rowNumSecond = rowSorted[rowSorted.length - 1][1];
      // }

      const firstField = this.hits[0];
      const secondField = this.hits[this.hits.length - 1];
      const rowNumFirst = Number(firstField[0]);
      const colNumFirst = Number(firstField[1]);
      const colNumSecond = Number(secondField[1]);
      let possibleShots;
      if (colNumFirst === colNumSecond) {
        possibleShots = [[`${Math.max(rowSorted[0][0], rowSorted[rowSorted.length - 1][0]) + 1},${colNumFirst}`], [`${Math.min(rowSorted[0][0], rowSorted[rowSorted.length - 1][0]) - 1},${colNumFirst}`]];
      } else {
        possibleShots = [[`${rowNumFirst},${Math.max(colSorted[0][1], colSorted[colSorted.length - 1][1]) + 1}`], [`${rowNumFirst},${Math.min(colSorted[0][1], colSorted[colSorted.length - 1][1]) - 1}`]];
      }
      selectedShot = possibleShots[Math.floor(Math.random() * possibleShots.length)][0];
    }
    const check = selectedShot.split(',');
    if (check[0] < 1 || check[0] > 10 || check[1] < 1 || check[1] > 10) {
      return this.shootAdjecent(playerFields);
    }
    return selectedShot;
  }
}

module.exports = PlayerAI;
