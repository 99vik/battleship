const helloWorld = require('../src/helloWorld');

test('Return "Hello world"', () => {
  expect(helloWorld()).toBe('Hello world');
});
