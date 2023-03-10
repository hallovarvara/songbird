import { getRandomNumber } from './utils/get-random-number';
import { CATEGORIES, TV_SHOWS } from './data';
import { IObjectOfStrings, IRoundData } from './types';
import { DEFAULT_QUESTIONS_COUNT, MAX_ROUND_POINTS } from './constants';

export const getShowsByCategory = (category: string): IObjectOfStrings[] =>
  TV_SHOWS.filter((show) => show.category === category);

const getCategorizedShowsForRound = (category: string) => {
  const categorizedShows = getShowsByCategory(category);
  const rightAnswerShow = getRandomNumber(categorizedShows.length - 1);
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
  CATEGORIES.map(({ id, title }) => ({
    id,
    title,
    isGuessed: false,
    award: MAX_ROUND_POINTS,
    shows: getCategorizedShowsForRound(title),
  }));

export const getShowsByCategoryAndCount = (
  category: string,
  count: number = DEFAULT_QUESTIONS_COUNT,
): IObjectOfStrings[] => getShowsByCategory(category).slice(0, count);
