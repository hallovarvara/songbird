import React from 'react';

import Header from '../../components/Header';

import { IPlayPage, IShow } from '../../helpers/interfaces';
import GameProgress from '../../components/GameProgress';
import Question from '../../components/Question';

const getAnswerShow = (shows: IShow[] | undefined): IShow | undefined => {
  let answerShow;
  if (shows) {
    [answerShow] = shows.filter((show) => show.isAnswer);
  }
  return answerShow;
};

const PlayPage: React.FC<IPlayPage> = ({ score, currentRound }) => (
  <div className="page_play">
    <GameProgress round={currentRound?.number || 0} />
    <Header score={score} currentRound={currentRound} />
    <Question
      answer={getAnswerShow(currentRound?.shows)}
      isGuessed={currentRound?.isGuessed || false}
    />
  </div>
);

export default PlayPage;
