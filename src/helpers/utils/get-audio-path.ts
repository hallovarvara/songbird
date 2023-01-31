export const getAudioPath = (path: string | undefined = 'house-md'): string =>
  `${process.env.PUBLIC_URL}/music/${path}.mp3`;
