import shotImg from './circle.svg';

const Ship = require('./ship');

export default function markField(fieldDiv, value) {
  if (value instanceof Ship) {
    fieldDiv.classList.add('hit');
  } else {
    fieldDiv.classList.add('miss');
    const img = new Image();
    img.src = shotImg;
    fieldDiv.appendChild(img);
  }
}
