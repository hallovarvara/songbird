import { categories } from '../constants';

export const getShowsCategories = () =>
  categories.reduce(
    (result, { id, title }) => ({
      ...result,
      [id]: title,
    }),
    {},
  );
