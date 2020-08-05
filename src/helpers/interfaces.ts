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
