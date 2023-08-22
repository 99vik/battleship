const Player = require('./player');

class PlayerAI extends Player {
  constructor() {
    super();
    this.misses = [];
    this.hits = [];
  }

  takeShot() {
  }
}

module.exports = PlayerAI;
