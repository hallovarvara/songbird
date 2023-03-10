import React from 'react';
import { IPlayPage, IShow } from '../../helpers/types';
import { DICTIONARY } from '../../helpers/data';
import { Header } from '../../components/Header';
import { GameProgress } from '../../components/GameProgress';
import { Question } from '../../components/Question';
import { AnswersList } from '../../components/AnswersList';
import { ShowInfo } from '../../components/ShowInfo';

const getAnswerShow = (shows: IShow[]): IShow => {
  const [answerShow] = shows.filter((show) => show.isAnswer);
  return answerShow;
};

const PlayPage: React.FC<IPlayPage> = ({
  score,
  roundsData,
  handleClickToAnswer,
  handleClickToNextRound,
  currentRoundNumber,
  lastClickedShowNumber,
  handleShowAudioPlaying,
}) => {
  const currentRoundData = roundsData[currentRoundNumber];
  const { shows, isGuessed } = currentRoundData;

  return (
    <div className="page_play">
      <GameProgress
        round={
          currentRoundData.isGuessed
            ? currentRoundNumber + 1
            : currentRoundNumber
        }
      />
      <Header
        score={score}
        roundsData={roundsData}
        currentRoundNumber={currentRoundNumber}
      />
      <Question
        answer={getAnswerShow(shows)}
        isGuessed={isGuessed || false}
        handleClickToNextRound={handleClickToNextRound}
        handleShowAudioPlaying={handleShowAudioPlaying}
      />
      <AnswersList shows={shows} handleClickToAnswer={handleClickToAnswer} />
      {lastClickedShowNumber >= 0 ? (
        <ShowInfo
          show={currentRoundData.shows[lastClickedShowNumber]}
          handleShowAudioPlaying={handleShowAudioPlaying}
        />
      ) : (
        <p className="page_play__instruction">{DICTIONARY.listenToSeeInfo}</p>
      )}
    </div>
  );
};

export default PlayPage;
