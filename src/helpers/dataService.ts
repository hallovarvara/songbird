import * as _ from 'lodash';
import { categories, defaultQuestionsCount, maximumAwardForRound } from './constants';
import data from './data';
import { IObjectOfStrings, IRoundData } from './interfaces';

export const getShowsByCategory = (category: string): IObjectOfStrings[] =>
  data.filter((show) => show.category === category);

const getCategorizedShowsForRound = (category: any) => {
  const categorizedShows = getShowsByCategory(category);
  const rightAnswerShow = _.random(categorizedShows.length - 1);
  return categorizedShows.map((show, showNumber) => {
    const { title, originalTitle, description, path } = show;
    return {
      title,
      originalTitle,
      description,
      path,
      isAnswer: showNumber === rightAnswerShow,
      isClicked: false,
    };
  });
};

export const getRoundsData = (): IRoundData[] =>
  categories.map((category) => ({
    id: category.id,
    title: category.title,
    isGuessed: false,
    award: maximumAwardForRound,
    shows: getCategorizedShowsForRound(category.title),
  }));

export const getShowsByCategoryAndCount = (
  category: string,
  count: number = defaultQuestionsCount,
): IObjectOfStrings[] => getShowsByCategory(category).slice(0, count);
