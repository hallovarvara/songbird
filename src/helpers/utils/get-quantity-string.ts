import { TWordSet } from '@types';

export const getQuantityString = (
  quantity: number,
  wordSet?: TWordSet,
  shouldReturnNumber?: boolean,
) => {
  if (
    wordSet === undefined
    || typeof wordSet !== 'object'
    || Object.keys(wordSet).length === 0
    || quantity === undefined
  ) {
    return '';
  }

  let result = shouldReturnNumber ? `${quantity} ` : '';

  switch (quantity) {
    case 1:
    case 21:
      result += wordSet.one;
      break;
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
    case 24:
      result += wordSet.few;
      break;
    default:
      result += wordSet.many;
  }

  return result;
};
