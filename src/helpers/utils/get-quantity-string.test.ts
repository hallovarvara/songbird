import { getQuantityString } from './get-quantity-string';
import { WORD_SETS } from '../data';

const wordSet = WORD_SETS.points;

describe('getQuantityString', () => {
  it.each(
    [
      [1, '1 балл'],
      [2, '2 балла'],
      [3, '3 балла'],
      [4, '4 балла'],
      [5, '5 баллов'],
      [6, '6 баллов'],
      [7, '7 баллов'],
      [8, '8 баллов'],
      [9, '9 баллов'],
      [10, '10 баллов'],
      [11, '11 баллов'],
      [12, '12 баллов'],
      [13, '13 баллов'],
      [14, '14 баллов'],
      [15, '15 баллов'],
      [16, '16 баллов'],
      [17, '17 баллов'],
      [18, '18 баллов'],
      [19, '19 баллов'],
      [20, '20 баллов'],
      [21, '21 балл'],
      [22, '22 балла'],
      [23, '23 балла'],
      [24, '24 балла'],
      [25, '25 баллов'],
      [26, '26 баллов'],
      [27, '27 баллов'],
      [28, '28 баллов'],
      [29, '29 баллов'],
      [30, '30 баллов'],
    ],
  )('returns %s and a correct word', (quantity, result) => {
    expect(getQuantityString(quantity, wordSet, true)).toBe(result);
  });

  it.each(
    [
      [1, 'балл'],
      [2, 'балла'],
      [9, 'баллов'],
      [16, 'баллов'],
      [21, 'балл'],
      [23, 'балла'],
      [29, 'баллов'],
    ],
  )('returns just a correct word for %s number', (quantity, result) => {
    expect(getQuantityString(quantity, wordSet)).toBe(result);
  });
});
