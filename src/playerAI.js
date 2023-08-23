const Player = require('./player');

class PlayerAI extends Player {
  constructor() {
    super();
    this.misses = [];
    this.hits = [];
  }

  takeShot() {
    const values = Object.keys(this.board.fields);
    const randomField = values[Math.floor(Math.random() * values.length)];
    if (this.misses.includes(randomField) || this.hits.includes(randomField)) {
      this.takeShot();
    }
    return randomField;
  }
}

module.exports = PlayerAI;
