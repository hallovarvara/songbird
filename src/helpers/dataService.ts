import { categories, defaultQuestionsCount } from './constants';
import data from './data';
import { IObjectOfStrings, IShows } from './interfaces';

export const getSeriesByCategory = (category: string):IObjectOfStrings[] => data.filter(
  (show) => show.category === category,
);

export const getCategorizedShows = (): IShows => Object.keys(categories).reduce(
  (result, category: string) => ({
    ...result,
    [category]: getSeriesByCategory(categories[category]),
  }), {},
);

export const getSeriesByCategoryAndCount = (
  category: string,
  count: number = defaultQuestionsCount,
):IObjectOfStrings[] => getSeriesByCategory(category).slice(0, count);
