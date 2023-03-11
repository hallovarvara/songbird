import { IObjectOfStrings } from '@types';

export const DICTIONARY: IObjectOfStrings = {
  logo: 'Logo',
  chooseAnswer: 'Pick TV Show',
  title: 'Guess TV Show',
  subtitle: 'by soundtrack',
  startGame: 'Play game',
  startNewGame: 'Start a new game',
  currentQuestion: 'current round',
  nextQuestion: 'Continue',
  answersListTitle:
    'From which TV series is the soundtrack playing in the player above?',
  sumUp: 'You got {points} {pointsWord} out of {maximumScore}',
  tryAgain:
    'To get maximum points and become a die-hard serial maniac, play again',
  youWin:
    'Congrats! The game is over, and you have achieved your goal of becoming the chief admirer of TV series',
  listenToSeeInfo:
    'Listen to the music in the player and choose the show it refers to',
};

export const WORD_SETS = {
  points: { one: 'point', few: 'points', many: 'points' },
};

export const CATEGORIES: IObjectOfStrings[] = [
  {
    title: 'Detective',
    id: 'detective',
  },
  {
    title: 'Sci-fi',
    id: 'fantastic',
  },
  {
    title: 'Drama',
    id: 'drama',
  },
  {
    title: 'Comedy',
    id: 'comedy',
  },
  {
    title: 'Medicine',
    id: 'medicine',
  },
  {
    title: 'Final',
    id: 'final',
  },
];
