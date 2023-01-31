import { IObjectOfStrings } from './interfaces';

export const defaultQuestionsCount = 6;
export const maximumAwardForRound = 5;
export const defaultProgressJumpStep = 10000;

export const soundPath: IObjectOfStrings = {
  success: 'success',
  fail: 'fail',
};

export const constants: IObjectOfStrings = {
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

export const categories: IObjectOfStrings[] = [
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
