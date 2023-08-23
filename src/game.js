const Player = require('./player');
const PlayerAI = require('./playerAI');

class Game {
  constructor() {
    this.player = new Player();
    this.bot = new PlayerAI();
    this.currentPlayer = this.player;
    this.opponent = this.bot;
    this.playerBoard = document.querySelector('#player');
    this.botBoard = document.querySelector('#bot');
  }

  playerTurn(player, coordinates) {
    player.board.recieveAttack([coordinates]);
    console.log(player);
    this.dimCurrentPlayerFields();
    setTimeout(() => {
      console.log(this.bot.takeShot());
    }, 1000);
  }

  dimCurrentPlayerFields() {
    this.playerBoard.classList.toggle('dimmed');
    this.botBoard.classList.toggle('dimmed');
  }

  switchPlayer() {
    if (this.currentPlayer === this.player) {
      this.currentPlayer = this.bot;
      this.opponent = this.player;
    } else {
      this.currentPlayer = this.player;
      this.opponent = this.bot;
    }
  }

  gameOver() {
    return false;
  }
}

module.exports = Game;
