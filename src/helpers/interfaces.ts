import React from 'react';

export interface IOrder {
  category: string,
  points: number,
}

export interface IAppState {
  isPlaying: boolean,
  isGameEnded: boolean,
  round: number,
  score: number,
  order: IOrder[],
  shows: IShows,
  currentRoundData: ICurrentRound | null,
  rightAnswerKey: number,
}

export interface IObjectOfStrings {
  [key: string]: string;
}

export interface IShow {
  title: string,
  originalTitle: string,
  category: string,
  description: string,
  path: string,
  isAnswer?: boolean,
  // isGuessed: boolean,
}

export interface IShows {
  [key: string]: IShow[]
}

export interface ICurrentRound {
  title: string,
  key: string,
  shows: IShow[],
  number: number,
  isGuessed: boolean,
}

export interface IAudioPlayer {
  path: string | undefined;
}

export interface IHandleClick {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IButton extends IHandleClick {
  label: string;
  classes?: string;
  disabled?: boolean;
}

export interface IGameProgress { round: number }
export interface IScore { score: number }

export interface IHeader {
  score: number,
  currentRound: null | ICurrentRound,
}

export interface IQuestion {
  answer: IShow | undefined,
  isGuessed: boolean,
}

export interface IPlayPage extends IHeader {}
