const Player = require('./player');

class PlayerAI extends Player {
  constructor() {
    super();
    this.misses = [];
    this.hits = [];
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
    console.log('shooting adjecent');
    let selectedShot;
    if (this.hits.length === 1) {
      const field = this.hits[0];
      const rowNum = Number(field[0]);
      const colNum = Number(field[1]);
      if (playerFields[`${rowNum + 1},${colNum}`] !== 'miss' && playerFields[`${rowNum + 1},${colNum}`] !== 'hit') {
        selectedShot = `${rowNum + 1},${colNum}`;
      } if (playerFields[`${rowNum - 1},${colNum}`] !== 'miss' && playerFields[`${rowNum - 1},${colNum}`] !== 'hit') {
        selectedShot = `${rowNum - 1},${colNum}`;
      } if (playerFields[`${rowNum},${colNum + 1}`] !== 'miss' && playerFields[`${rowNum},${colNum + 1}`] !== 'hit') {
        selectedShot = `${rowNum},${colNum + 1}`;
      } if (playerFields[`${rowNum},${colNum - 1}`] !== 'miss' && playerFields[`${rowNum},${colNum - 1}`] !== 'hit') {
        selectedShot = `${rowNum},${colNum - 1}`;
      }
    } else {
      const firstField = this.hits[0];
      const secondField = this.hits[this.hits.length - 1];
      const rowNumFirst = Number(firstField[0]);
      const colNumFirst = Number(firstField[1]);
      const rowNumSecond = Number(secondField[0]);
      const colNumSecond = Number(secondField[1]);
      let possibleShots;
      if (colNumFirst === colNumSecond) {
        possibleShots = [[`${Math.max(rowNumFirst, rowNumSecond) + 1},${colNumFirst}`], [`${Math.min(rowNumFirst, rowNumSecond) - 1},${colNumFirst}`]];
      } else {
        possibleShots = [[`${rowNumFirst},${Math.max(colNumFirst, colNumSecond) + 1}`], [`${rowNumFirst},${Math.min(colNumFirst, colNumSecond) - 1}`]];
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
