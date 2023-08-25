const { default: generateFields } = require('./gameboardDOM');
const { default: markField } = require('./markField');
const Player = require('./player');
const PlayerAI = require('./playerAI');
const Ship = require('./ship');

class Game {
  constructor() {
    this.player = new Player();
    this.bot = new PlayerAI();
    this.playerBoard = document.querySelector('#player');
    this.playerBoard.classList.toggle('dimmed');
    this.botBoard = document.querySelector('#bot');
  }

  startGame() {
    this.generateBoards();
  }

  generateBoards() {
    generateFields(this.player, this.playerBoard, this);
    generateFields(this.bot, this.botBoard, this);
  }

  playerTurn(coordinates) {
    this.bot.board.recieveAttack([coordinates], this.botBoard);
    if (this.bot.board.allShipsSunk()) {
      this.winSequence('You');
      this.playerBoard.classList.remove('dimmed');
      return;
    }
    this.botMove();
    this.dimCurrentPlayerFields();
  }

  botMove() {
    setTimeout(() => {
      const botRandomField = this.bot.takeShot(this.player.board.fields).split(',');
      const rowNum = ((Number(botRandomField[0]) - 1) * 10);
      const columNum = Number(botRandomField[1]);
      const fieldNum = rowNum + columNum;
      let ship;
      const selectedField = this.playerBoard.children.item(fieldNum - 1);
      if (this.player.board.fields[botRandomField] instanceof Ship) {
        ship = this.player.board.fields[botRandomField];
      }
      markField(selectedField, this.player.board.fields[botRandomField]);
      this.player.board.recieveAttack([`${botRandomField[0]},${botRandomField[1]}`], this.playerBoard);
      if (this.player.board.fields[botRandomField] === 'miss') {
        this.bot.misses.push(botRandomField);
      } else {
        this.bot.hits.push(botRandomField);
        if (ship.isSunk()) {
          this.bot.hits = [];
        }
      }
      if (this.player.board.allShipsSunk()) {
        this.winSequence('Computer');
        this.botBoard.classList.remove('dimmed');
        return;
      }
      this.dimCurrentPlayerFields();
    }, 1);
  }

  restartPlayers() {
    this.player = new Player();
    this.bot = new PlayerAI();
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

  announceWinner(winner) {
    console.log(`${winner} won!`);
  }

  winSequence(winner) {
    this.announceWinner(winner);
    const main = document.querySelector('main');
    main.classList.toggle('noclick');
    const modal = document.querySelector('.popup-modal');
    modal.classList.toggle('show');
    modal.children[0].textContent = `${winner} won.`;

    modal.children[1].addEventListener('click', () => {
      main.classList.remove('noclick');
      modal.classList.remove('show');
      this.playerBoard.classList.add('dimmed');
      this.restartPlayers();
      this.generateBoards();
    });
  }
}

module.exports = Game;
