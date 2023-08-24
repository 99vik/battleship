import findShipFields from './findShipFields';

export default function findAdjecentFields(coordinate, fields) {
  const shipFields = findShipFields(coordinate, fields);

  console.log(shipFields);
  return shipFields;
}
