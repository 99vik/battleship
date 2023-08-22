export default function generateFields(player, boardDOM) {
  const fields = Object.values(player.board.fields);
  console.log(fields);
  fields.forEach((field) => {
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('field');

    fieldDiv.addEventListener('click', () => {
      console.log(field);
    });
    boardDOM.appendChild(fieldDiv);
  });
}
