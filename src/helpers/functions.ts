export const makeKeyByText = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^а-яa-z0-9-]/g, '');

export const getAudioPath = (title: string): string => require(`../assets/audio/${title}.mp3`);
