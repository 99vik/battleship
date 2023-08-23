import './styles.css';
import generateFields from './gameboardDOM';

const Game = require('./game');

const playerBoard = document.querySelector('#player');
const botBoard = document.querySelector('#bot');
playerBoard.classList.toggle('dimmed');

const game = new Game();
generateFields(game.player, playerBoard, game);
generateFields(game.bot, botBoard, game);
