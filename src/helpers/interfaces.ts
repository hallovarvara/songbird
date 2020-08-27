import React from 'react';

export interface IRoundData {
  isGuessed: boolean;
  award: number;
  id: string;
  title: string;
  shows: IShow[];
}

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

export interface IRound {
  title: string;
  id: string;
  isGuessed: boolean;
  shows: IShow[];
}

export interface IAudioPlayer {
  path: string | undefined;
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
  currentRoundData: IRound;
}

export interface IQuestion {
  answer: IShow | undefined;
  isGuessed: boolean;
  handleClickToNextRound: IHandleClick | undefined;
}

export interface IHandleClick {
  (event: React.MouseEvent): void | undefined;
}

export interface IHandleClickToAnswer {
  (showIndex: number): void;
}

export interface IAnswersList {
  shows: IShow[] | undefined;
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
  roundNumber: number;
  lastClickedShowNumber: number;
}
