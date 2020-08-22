import { IObjectOfStrings } from './interfaces';

export const defaultQuestionsCount: number = 6;
export const maximumAwardForRound: number = 5;

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
  currentQuestion: 'текущий вопрос',
  nextQuestion: 'Дальше',
  answersListTitle: 'Из какого сериала музыкальная тема, представленная в плеере?',
};

export const categories: IObjectOfStrings = {
  detective: 'Детектив',
  fantastic: 'Фантастика',
  drama: 'Драма',
  comedy: 'Комедия',
  medicine: 'Медицина',
  final: 'Финал',
};
