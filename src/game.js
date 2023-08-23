const Player = require('./player');
const PlayerAI = require('./playerAI');

class Game {
  constructor() {
    this.player = new Player();
    this.bot = new PlayerAI();
    this.currentPlayer = this.player;
  }

  gameLoop() {
    while (!this.gameOver) {
      this.playerTurn(this.currentPlayer);
    }
  }

  playerTurn(player) {
    console.log(player);
  }

  switchPlayer() {
    if (this.currentPlayer === this.player) {
      this.currentPlayer = this.bot;
    } else {
      this.currentPlayer = this.player;
    }
  }

  gameOver() {
    return false;
  }
}

module.exports = Game;
