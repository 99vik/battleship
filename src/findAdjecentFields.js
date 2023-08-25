import findShipFields from './findShipFields';

function removeOuterFields(fields) {
  const cleanedFields = fields.filter((field) => {
    if (field[0] >= 1 && field[0] <= 10 && field[1] >= 1 && field[1] <= 10) {
      return true;
    }
    return false;
  });
  return cleanedFields;
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
  const row = Number(field[0].split(',')[0]);
  const col = Number(field[0].split(',')[1]);
  return [[row + 1, col], [row, col + 1],
    [row + 1, col + 1], [row - 1, col],
    [row, col - 1], [row - 1, col - 1],
    [row - 1, col + 1], [row + 1, col - 1]];
}

function removeShipFields(_shipFields, fields) {
  const shipFields = _shipFields.map((field) => {
    const row = Number(field[0].split(',')[0]);
    const col = Number(field[0].split(',')[1]);
    return [row, col];
  });

  return fields.filter((field) => {
    if (!shipFields.some((shipField) => shipField[0] === field[0]
     && shipField[1] === field[1])) {
      return true;
    }
    return false;
  });
}

export default function findAdjecentFields(coordinate, fields) {
  const shipFields = findShipFields(coordinate, fields);
  let adjecentFields = [];

  shipFields.forEach((field) => {
    adjecentFields.push(addAdjecentFields(field));
  });
  adjecentFields = removeOuterFields(adjecentFields.flat());
  adjecentFields = removeReduntantFields(adjecentFields);
  adjecentFields = removeShipFields(shipFields, adjecentFields);

  console.log(adjecentFields);
  return adjecentFields;
}
