const Gameboard = require("../src/gameboard");
const Ship = require('../src/ship');

let gameboard;
let ship; 

beforeEach(() => {
    gameboard = new Gameboard;
    ship = new Ship(3);
  });

test("Places ship", () => {
    gameboard.placeShip([2, 2], ship, 'h');
    expect(gameboard.fields[[2, 2]]).toBe(ship);
});

test("Doesnt place ship", () => {
    gameboard.placeShip([10, 9], ship, 'h');
    expect(gameboard.fields[[10, 9]]).toBe(null);
});