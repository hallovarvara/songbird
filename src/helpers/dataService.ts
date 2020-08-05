import { defaultQuestionsCount } from './constants';
import data from './data';
import { IObjectOfStrings } from './interfaces';

export const getSeriesByCategory = (category: string):IObjectOfStrings[] => data.filter(
  (tv) => tv.category === category,
);

export const getSeriesByCategoryAndCount = (
  category: string,
  count: number = defaultQuestionsCount,
):IObjectOfStrings[] => getSeriesByCategory(category).slice(0, count);
