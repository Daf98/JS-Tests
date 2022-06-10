const Calculator = require('./calculator');
const calculator = new Calculator();
//Task 3
describe('calculator', () => {
    test('it adds', () => {
      expect(calculator.add(2,2)).toBe(4);
    });
    test('it substracts', () => {
      expect(calculator.substract(2,2)).toBe(0);
    });
    test('it multiplies', () => {
      expect(calculator.multiply(2,2,)).toBe(4);
    });
    test('it divides', () => {
      expect(calculator.divide(2,2)).toBe(1);
    });
  });