function checkDirection(fields, rowNum, colNum) {
  if (rowNum < 1 || rowNum > 10 || colNum < 1 || colNum > 10) {
    return false;
  }
  const fieldValue = fields[[rowNum, colNum]];
  if (fieldValue === 'miss' || fieldValue === null || fieldValue === undefined) {
    return false;
  }
  console.log(fieldValue);
  return true;
}

function checkLeft(shipFields, fields, rowNum, colNum) {
  console.log('left');
  if (checkDirection(fields, rowNum, colNum)) {
    shipFields.push([`${rowNum},${colNum}`]);
    return checkLeft(shipFields, fields, rowNum, colNum - 1);
  }

  return shipFields;
}

function checkRight(shipFields, fields, rowNum, colNum) {
  console.log('right');

  if (checkDirection(fields, rowNum, colNum)) {
    shipFields.push([`${rowNum},${colNum}`]);
    return checkRight(shipFields, fields, rowNum, colNum + 1);
  }
  return shipFields;
}

function checkUp(shipFields, fields, rowNum, colNum) {
  console.log('up');

  if (checkDirection(fields, rowNum, colNum)) {
    shipFields.push([`${rowNum},${colNum}`]);
    return checkUp(shipFields, fields, rowNum - 1, colNum);
  }
  return shipFields;
}

function checkDown(shipFields, fields, rowNum, colNum) {
  console.log('down');

  if (checkDirection(fields, rowNum, colNum)) {
    shipFields.push([`${rowNum},${colNum}`]);
    return checkUp(shipFields, fields, rowNum + 1, colNum);
  }
  return shipFields;
}

export default function findShipFields(coordinate, fields) {
  const startingRow = coordinate[0].split(',')[0];
  const startingCol = coordinate[0].split(',')[1];
  let shipFields = [];
  shipFields.push(coordinate);

  shipFields = checkLeft(shipFields, fields, startingRow, Number(startingCol) - 1);
  shipFields = checkRight(shipFields, fields, startingRow, Number(startingCol) + 1);
  shipFields = checkUp(shipFields, fields, Number(startingRow) - 1, startingCol);
  shipFields = checkDown(shipFields, fields, Number(startingRow) + 1, startingCol);

  return shipFields;
}
