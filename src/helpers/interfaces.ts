import React from 'react';

export interface IObjectOfStrings {
  [key: string]: string;
}

export interface IAudioPlayer {
  path: string;
}

export interface IHandleClick {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IButton extends IHandleClick {
  label: string;
}

export interface IQuestionCurrent { currentQuestion: string }
export interface IScore { score: number }

export interface IHeader {
  score: number,
  currentQuestion: string,
}

export interface IPlayPage extends IHeader {}
