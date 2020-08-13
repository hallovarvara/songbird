export const makeKeyByText = (text: string): string => text
  .toLowerCase()
  .replace(/\s/g, '-')
  .replace(/[^а-яa-z0-9-]/g, '');

export const getAudioPath = (path: string | undefined = 'house-md'): string => `${process.env.PUBLIC_URL}/music/${path}.mp3`;
export const getImagePath = (path: string | undefined = 'house-md'): string => `${process.env.PUBLIC_URL}/posters/${path}.jpg`;
// export const getImagePath = (path: string | undefined = 'house-md'): string => `./${path}.jpg`;

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
