import React from 'react';
import { IHeader } from '@types';
import { ReactComponent as Logo } from '@assets/images/songbird-logo.svg';
import { Score } from '@components/Score';
import { QuestionsList } from '@components/QuestionsList';

export const Header: React.FC<IHeader> = ({
  score,
  currentRoundNumber,
  roundsData,
}) => (
  <header>
    <Logo />
    <QuestionsList
      roundsData={roundsData}
      currentRoundNumber={currentRoundNumber}
    />
    <Score score={score} />
  </header>
);
