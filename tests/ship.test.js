const Ship = require("../src/ship");
let ship;

beforeEach(() => {
  ship = new Ship(3);
});

test("Ship is not sunk after 1 hit", () => {
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});

test("Ship is sunk after 3 hits", () => {
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});
