import React from 'react';

import Header from '../../components/Header';

import { IPlayPage, IShow } from '../../helpers/interfaces';
import GameProgress from '../../components/GameProgress';
import Question from '../../components/Question';
import AnswersList from '../../components/AnswersList';
import ShowInfo from '../../components/ShowInfo';

const getAnswerShow = (shows: IShow[] | undefined): IShow | undefined => {
  let answerShow;
  if (shows) {
    [answerShow] = shows.filter((show) => show.isAnswer);
  }
  return answerShow;
};

const PlayPage: React.FC<IPlayPage> = ({
  score,
  currentRoundData,
  handleClickToAnswer,
  handleClickToNextRound,
  roundNumber,
  lastClickedShowNumber,
}) => {
  const { shows, isGuessed } = currentRoundData;

  return (
    <div className="page_play">
      <GameProgress round={roundNumber} />
      <Header score={score} currentRoundData={currentRoundData} />
      <Question
        answer={getAnswerShow(shows)}
        isGuessed={isGuessed || false}
        handleClickToNextRound={handleClickToNextRound}
      />
      <AnswersList shows={shows} handleClickToAnswer={handleClickToAnswer} />
      {lastClickedShowNumber >= 0 && (
        <ShowInfo show={currentRoundData.shows[lastClickedShowNumber]} />
      )}
    </div>
  );
};

export default PlayPage;
