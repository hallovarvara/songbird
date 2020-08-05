export const makeKeyByText = (text: string): string => text
  .toLowerCase()
  .replace(/\s/g, '-')
  .replace(/[^а-яa-z0-9-]/g, '');

export const getAudioPath = (path: string): string => require(`../assets/audio/${path}.mp3`);

export const getImagePath = (path: string): string => `../assets/posters/${path}.jpg`;
