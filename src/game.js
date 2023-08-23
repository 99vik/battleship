const { default: markField } = require('./markField');
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

  async playerTurn(coordinates) {
    this.bot.board.recieveAttack([coordinates]);
    // console.log(this.bot);
    this.dimCurrentPlayerFields();
    setTimeout(() => {
      const botRandomField = this.bot.takeShot().split(',');
      console.log(botRandomField);
      // console.log(this.player.board);

      const rowNum = ((Number(botRandomField[0]) - 1) * 10);
      const columNum = Number(botRandomField[1]);
      const fieldNum = rowNum + columNum;
      const selectedField = this.playerBoard.children.item(fieldNum - 1);
      markField(selectedField, this.player.board.fields[botRandomField]);
      this.player.board.recieveAttack(botRandomField);
      this.dimCurrentPlayerFields();
    }, 500);
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
