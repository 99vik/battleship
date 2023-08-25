import Ship from './ship';

let dragged = null;
let rotation = 'v';
const takenFields = [];

function createShip(length) {
  const shipDiv = document.createElement('div');
  for (let i = 0; i < length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('field');
    div.classList.add('ship');
    shipDiv.appendChild(div);
  }

  shipDiv.setAttribute('draggable', 'true');
  shipDiv.addEventListener('dragstart', (event) => {
    dragged = [length, rotation, event.target];
  });

  return shipDiv;
}

function addPlacementShipsToBotBoard(botBoard) {
  botBoard.appendChild(createShip(2));
  botBoard.appendChild(createShip(3));
  botBoard.appendChild(createShip(3));
  botBoard.appendChild(createShip(4));
  botBoard.appendChild(createShip(5));
}

function createRotateButton(botBoardDOM) {
  const button = document.createElement('button');
  button.innerHTML = 'Rotate';
  button.classList.add('rotate-btn');
  button.addEventListener('click', () => {
    if (rotation === 'v') {
      botBoardDOM.classList.toggle('horizontal');
      rotation = 'h';
    } else {
      rotation = 'v';
      botBoardDOM.classList.toggle('horizontal');
    }
  });
  botBoardDOM.parentNode.appendChild(button);
}

function removeShipFields(shipFields, fields) {
  return fields.filter((field) => {
    if (!shipFields.some((shipField) => shipField[0] === field[0]
       && shipField[1] === field[1])) {
      return true;
    }
    return false;
  });
}

function removeReduntantFields(fields) {
  const cleanedFields = [];
  fields.forEach((field) => {
    if (!cleanedFields.some((cleanedField) => cleanedField[0] === field[0]
       && cleanedField[1] === field[1])) {
      cleanedFields.push(field);
    }
  });
  return cleanedFields;
}

function addAdjecentFields(field) {
  const row = field[0];
  const col = field[1];
  return [[row + 1, col], [row, col + 1],
    [row + 1, col + 1], [row - 1, col],
    [row, col - 1], [row - 1, col - 1],
    [row - 1, col + 1], [row + 1, col - 1]];
}

function removeOuterFields(fields) {
  const cleanedFields = fields.filter((field) => {
    if (field[0] >= 1 && field[0] <= 10 && field[1] >= 1 && field[1] <= 10) {
      return true;
    }
    return false;
  });
  return cleanedFields;
}

function getAdjecentFields(shipFields) {
  let adjecentFields = [];

  shipFields.forEach((field) => {
    adjecentFields.push(addAdjecentFields(field));
  });
  adjecentFields = removeOuterFields(adjecentFields.flat());
  adjecentFields = removeReduntantFields(adjecentFields);
  adjecentFields = removeShipFields(shipFields, adjecentFields);

  return adjecentFields;
}

function placementValid(coordinate, shipRotation, length, board) {
  const shipFields = [];
  const rowNum = Number(coordinate.split(',')[0]);
  const colNum = Number(coordinate.split(',')[1]);
  if (shipRotation === 'h') {
    for (let i = colNum; i < (colNum + length); i += 1) {
      shipFields.push([rowNum, i]);
    }
  } else {
    for (let i = rowNum; i < (rowNum + length); i += 1) {
      shipFields.push([i, colNum]);
    }
  }
  if (shipFields.some((field) => field[0] < 1 || field[0] > 10 || field[1] < 1 || field[1] > 10)) {
    return false;
  }
  shipFields.forEach((field) => {
    takenFields.push(field);
    const fieldNum = (field[0] - 1) * 10 + field[1];
    const selectedField = document.querySelector('#player').children.item(fieldNum - 1);
    selectedField.classList.add('ship');
  });
  const adjecentFields = getAdjecentFields(shipFields);
  adjecentFields.forEach((field) => {
    takenFields.push(field);
  });
  console.log(takenFields);
  return true;
}

function placeShip(coordinate, board, length, shipRotation) {
  const rowNum = Number(coordinate.split(',')[0]);
  const colNum = Number(coordinate.split(',')[1]);
  board.placeShip([rowNum, colNum], new Ship(length), shipRotation);
}

export default function generateShipPlacementDOM(player, playerBoardDOM, botBoardDOM) {
  createRotateButton(botBoardDOM);
  const botBoard = botBoardDOM;
  const playerBoard = playerBoardDOM;
  const board = player.board;
  playerBoard.innerHTML = '';
  playerBoard.classList.remove('dimmed');
  Object.keys(player.board.fields).forEach((coordinate) => {
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('field');

    fieldDiv.addEventListener('dragover', (event) => {
      event.preventDefault();
    });
    fieldDiv.addEventListener('drop', (event) => {
      event.preventDefault();
      const shipRotation = dragged[1];
      const length = dragged[0];
      const shipDiv = dragged[2];
      if (placementValid(coordinate, shipRotation, length, board)) {
        shipDiv.remove();
        placeShip(coordinate, board, length, shipRotation);
        console.log(board);
      }
    });

    playerBoard.appendChild(fieldDiv);
  });
  botBoard.parentNode.children[0].textContent = 'Place you ships';
  botBoard.classList.add('ship-placement');
  addPlacementShipsToBotBoard(botBoard);
}