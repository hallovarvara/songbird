export interface IOrder {
  category: string;
  points: number;
}

export interface IAppState {
  isPlaying: boolean;
  isGameEnded: boolean;
  round: number;
  score: number;
  order: IOrder[];
  shows: IShows;
  currentRoundData: ICurrentRound | null;
  currentRoundAward: number;
  rightAnswerKey: number;
}

export interface IObjectOfStrings {
  [key: string]: string;
}

export interface IShow {
  title: string;
  originalTitle: string;
  category: string;
  description: string;
  path: string;
  isAnswer?: boolean;
  isClicked?: boolean;
}

export interface IShows {
  [key: string]: IShow[];
}

export interface ICurrentRound {
  title: string;
  key: string;
  shows: IShow[];
  number: number;
  isGuessed: boolean;
}

export interface IAudioPlayer {
  path: string | undefined;
}

export interface IButton {
  label: string;
  classes?: string;
  disabled?: boolean;
  handleClick: IHandleClick | undefined; // | IHandleClickToNextRound,
  // key?: string,
}

export interface IGameProgress {
  round: number;
}
export interface IScore {
  score: number;
}

export interface IHeader {
  score: number;
  currentRoundData: null | ICurrentRound;
}

export interface IQuestion {
  answer: IShow | undefined;
  isGuessed: boolean;
  handleClickToNextRound: IHandleClick | undefined; // IHandleClickToNextRound
}

export interface IHandleClick {
  (event: React.MouseEvent): void | undefined;
}

export interface IHandleClickToAnswer {
  handleClickToAnswer: IHandleClick;
}

// export interface IHandleClickToNextRound {
//   (event: React.MouseEvent, isRoundGuessed: boolean): void
// }

export interface IAnswersList extends IHandleClickToAnswer {
  shows: IShow[] | undefined;
}

export interface IStartPage {
  handleClick: IHandleClick;
}

export interface IPlayPage extends IHeader, IHandleClickToAnswer {
  handleClickToNextRound: IHandleClick | undefined;
}
