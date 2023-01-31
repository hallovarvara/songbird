export const getImagePath = (path: string | undefined = 'house-md'): string =>
  `${process.env.PUBLIC_URL}/posters/${path}.jpg`;
