import { getRandomNumber } from './get-random-number';

const possibleNumbers = [
  ...Object.keys(Array(100).fill(0)).map((n) => +n + 1),
  100,
];

describe('getRandomNumber', () => {
  it('returns value between 1 and 100', () => {
    for (let i = 1; i <= 100; i++) {
      const item = getRandomNumber();
      expect(typeof item).toBe('number');
      expect(possibleNumbers).toContain(item);
    }
  });
});
