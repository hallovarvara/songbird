import { defaultQuestionsCount } from './constants';
import data from './data';
import { ObjectOfStrings } from './interfaces';

export const getSeriesByCategory = (category: string):ObjectOfStrings[] => data.filter(
  (tv) => tv.category === category,
);

export const getSeriesByCategoryAndCount = (
  category: string,
  count: number = defaultQuestionsCount,
):ObjectOfStrings[] => getSeriesByCategory(category).slice(0, count);
