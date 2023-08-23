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
      console.log(player);
    });
    boardDOM.appendChild(fieldDiv);
  });
}
