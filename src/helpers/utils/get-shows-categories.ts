import { IObjectOfStrings } from '../types';

export const getShowsCategories = (categories: IObjectOfStrings[]) =>
  categories.reduce(
    (result, { id, title }) => ({
      ...result,
      [id]: title,
    }),
    {},
  );
