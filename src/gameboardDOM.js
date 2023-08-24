import markField from './markField';
import PlayerAI from './playerAI';

const Ship = require('./ship');

export default function generateFields(player, boardDOM, game) {
  const board = boardDOM;
  board.innerHTML = '';
  Object.keys(player.board.fields).forEach((coordinate) => {
    const value = player.board.fields[coordinate];
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('field');

    if (value instanceof Ship) {
      fieldDiv.classList.add('ship');
    }

    if (player instanceof PlayerAI) {
      fieldDiv.addEventListener('click', () => {
        if (game.bot.board.fields[coordinate] === null
          || game.bot.board.fields[coordinate] instanceof Ship) {
          game.playerTurn(coordinate);
          markField(fieldDiv, value);
        }
      });
    }
    boardDOM.appendChild(fieldDiv);
  });
}
