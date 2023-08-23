import shotImg from './circle.svg';

const Ship = require('./ship');

export default function generateFields(player, boardDOM) {
  Object.keys(player.board.fields).forEach((coordinate) => {
    const value = player.board.fields[coordinate];
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('field');

    if (value instanceof Ship) {
      fieldDiv.classList.add('ship');
    }

    fieldDiv.addEventListener('click', () => {
      player.board.recieveAttack([coordinate]);
      if (value instanceof Ship) {
        fieldDiv.classList.add('hit');
      } else {
        fieldDiv.classList.add('miss');
        const img = new Image();
        img.src = shotImg;
        fieldDiv.appendChild(img);
      }
      console.log(player);
    });
    boardDOM.appendChild(fieldDiv);
  });
}
