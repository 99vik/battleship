const Player = require('./player');

class playerAI extends Player {
  constructor() {
    super();
    this.misses = [];
    this.hits = [];
  }

  takeShot() {
  }
}

module.exports = playerAI;
