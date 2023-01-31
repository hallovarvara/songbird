export const getPointsWord = (points: number): string => {
  let word = 'баллов';
  switch (points) {
    case 1:
    case 21:
      word = 'балл';
      break;
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
    case 24:
      word = 'балла';
      break;
    default:
      break;
  }
  return word;
};
