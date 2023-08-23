import './styles.css';
import generateFields from './gameboardDOM';

const Game = require('./game');

const playerBoard = document.querySelector('#player');
const botBoard = document.querySelector('#bot');

const game = new Game();
generateFields(game.player, playerBoard);
generateFields(game.bot, botBoard);
