import { MouseEvent } from 'react';

export interface IAppState {
  isPlaying: boolean;
  isGameEnded: boolean;
  score: number;
  currentRoundNumber: number;
  roundsData: IRoundData[];
  lastClickedShowNumber: number;
}

export interface IObjectOfStrings {
  [key: string]: string;
}

export interface IShow {
  title: string;
  originalTitle: string;
  category?: string;
  description: string;
  path: string;
  isAnswer: boolean;
  isClicked: boolean;
}

export interface IShows {
  [key: string]: IShow[];
}

export interface IRoundData {
  isGuessed: boolean;
  award: number;
  id: string;
  title: string;
  shows: IShow[];
}

export interface IPlayer {
  path: string;
}

export interface IButton {
  label: string;
  classes?: string;
  disabled?: boolean;
  handleClick: IHandleClick | undefined;
}

export interface IGameProgress {
  round: number;
}
export interface IScore {
  score: number;
}

export interface IHeader {
  score: number;
  currentRoundNumber: number;
  roundsData: IRoundData[];
}

export interface IQuestion {
  answer: IShow;
  isGuessed: boolean;
  handleClickToNextRound: IHandleClick | undefined;
}

export interface IHandleClick {
  (event: MouseEvent): void | undefined;
}

export interface IHandleClickToAnswer {
  (showIndex: number): void;
}

export interface IAnswersList {
  shows: IShow[];
  handleClickToAnswer: IHandleClickToAnswer;
}

export interface IShowInfo {
  show: IShow;
}

export interface IStartPage {
  handleClick: IHandleClick;
}

export interface IPlayPage extends IHeader {
  handleClickToNextRound: IHandleClick | undefined;
  handleClickToAnswer: IHandleClickToAnswer;
  currentRoundNumber: number;
  lastClickedShowNumber: number;
}

export interface IEndPage {
  score: number;
  maximumScore: number;
  handleClick: IHandleClick;
}

export interface IQuestionsList {
  roundsData: IRoundData[];
  currentRoundNumber: number;
}
