const Player = require('./player');

class PlayerAI extends Player {
  constructor() {
    super();
    this.misses = [];
    this.hits = [];
  }

  takeShot(playerFields) {
    const values = Object.keys(this.board.fields);
    const randomField = values[Math.floor(Math.random() * values.length)];
    if (playerFields[randomField] === 'miss' || playerFields[randomField] === 'hit') {
      return this.takeShot(playerFields);
    }
    return randomField;
  }
}

module.exports = PlayerAI;
