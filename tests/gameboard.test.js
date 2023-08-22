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

test("Doesn't place ship", () => {
    gameboard.placeShip([10, 9], ship, 'h');
    expect(gameboard.fields[[10, 9]]).toBe(null);
});

test("Ship recieves hit ship", () => {
    gameboard.placeShip([2, 2], ship, 'h');
    gameboard.recieveAttack([2, 3]);
    expect(ship.hits).toBe(1);
});

test("Ship doesn't recieves hit ship", () => {
    gameboard.placeShip([2, 2], ship, 'h');
    gameboard.recieveAttack([3, 2]);
    expect(ship.hits).toBe(0);
});

test("Ship gets sunk after enough hits", () => {
    gameboard.placeShip([3, 3], ship, 'h');
    gameboard.recieveAttack([3, 3]);
    gameboard.recieveAttack([3, 4]);
    gameboard.recieveAttack([3, 5]);
    expect(ship.isSunk()).toBeTruthy();
});


test("All ships are not sunk", () => {
    gameboard.placeShip([3, 3], ship, 'h');
    gameboard.recieveAttack([3, 3]);
    gameboard.recieveAttack([3, 4]);
    expect(gameboard.allShipsSunk()).toBeFalsy();
});

test("All ships are sunk", () => {
    gameboard.placeShip([3, 3], ship, 'h');
    gameboard.recieveAttack([3, 3]);
    gameboard.recieveAttack([3, 4]);
    gameboard.recieveAttack([3, 5]);
    expect(gameboard.allShipsSunk()).toBeTruthy();
});