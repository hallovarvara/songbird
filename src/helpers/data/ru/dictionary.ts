import { IObjectOfStrings } from '../../types';

export const DICTIONARY: IObjectOfStrings = {
  logo: 'Лого',
  chooseAnswer: 'Выберите сериал',
  title: 'Угадай сериал',
  subtitle: 'по саундтреку',
  startGame: 'Начать игру',
  startNewGame: 'Начать новую игру',
  currentQuestion: 'текущий вопрос',
  nextQuestion: 'Дальше',
  answersListTitle:
    'Из какого сериала музыкальная тема, играющая в плеере выше?',
  sumUp: 'Вы набрали {points} {pointsWord} из {maximumScore} возможных',
  tryAgain:
    'Чтобы набрать максимум и стать отбитым сериаломаном, сыграйте снова',
  youWin:
    'Поздравляем! Игра окончена, а вы добились цели и стали главным знатоком сериальных дел',
  listenToSeeInfo:
    'Послушайте музыку из плеера и выберите сериал, к которому она относится',
};

export const WORD_SETS = {
  points: { one: 'балл', few: 'балла', many: 'баллов' },
};

export const CATEGORIES: IObjectOfStrings[] = [
  {
    title: 'Детектив',
    id: 'detective',
  },
  {
    title: 'Фантастика',
    id: 'fantastic',
  },
  {
    title: 'Драма',
    id: 'drama',
  },
  {
    title: 'Комедия',
    id: 'comedy',
  },
  {
    title: 'Медицина',
    id: 'medicine',
  },
  {
    title: 'Финал',
    id: 'final',
  },
];
