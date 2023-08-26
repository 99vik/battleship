import shotImg from './circle.svg';

const Ship = require('./ship');

export default function markField(fieldDiv, value) {
  if (fieldDiv === null) {
    return;
  }
  if (fieldDiv.children.length !== 0) {
    return;
  }
  if (value instanceof Ship) {
    fieldDiv.classList.add('ship');
    fieldDiv.classList.add('hit');
  } else {
    fieldDiv.classList.add('miss');
    const img = new Image();
    img.src = shotImg;
    fieldDiv.appendChild(img);
  }
}
