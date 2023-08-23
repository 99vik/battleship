import shotImg from './circle.svg';
import PlayerAI from './playerAI';

const Ship = require('./ship');

export default function generateFields(player, boardDOM, game) {
  Object.keys(player.board.fields).forEach((coordinate) => {
    const value = player.board.fields[coordinate];
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('field');

    if (value instanceof Ship) {
      fieldDiv.classList.add('ship');
    }

    if (player instanceof PlayerAI) {
      fieldDiv.addEventListener('click', () => {
        game.playerTurn(player, coordinate);
        if (value instanceof Ship) {
          fieldDiv.classList.add('hit');
        } else {
          fieldDiv.classList.add('miss');
          const img = new Image();
          img.src = shotImg;
          fieldDiv.appendChild(img);
        }
      });
    }
    boardDOM.appendChild(fieldDiv);
  });
}
