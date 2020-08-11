export const makeKeyByText = (text: string): string => text
  .toLowerCase()
  .replace(/\s/g, '-')
  .replace(/[^а-яa-z0-9-]/g, '');

export const getAudioPath = (path: string): string => require(`../assets/music/${path}.mp3`);

export const getImagePath = (path: string): string => `../assets/posters/${path}.jpg`;

export const getPointsWord = (points: number): string => {
  let word = 'баллов';
  switch (points) {
    case 1:
    case 21:
      word = 'балл'; break;
    case 2:
    case 3:
    case 4:
    case 22:
    case 23:
    case 24:
      word = 'балла'; break;
  }
  return word;
};
