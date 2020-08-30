import React from 'react';

import { ReactComponent as Logo } from '../../assets/images/songbird-logo.svg';
import Score from '../Score';

import { IHeader } from '../../helpers/interfaces';
import QuestionsList from '../QuestionsList/QuestionsList';

const Header: React.FC<IHeader> = ({ score, currentRoundNumber, roundsData }) => (
  <header>
    <Logo />
    <QuestionsList roundsData={roundsData} currentRoundNumber={currentRoundNumber} />
    <Score score={score} />
  </header>
);

export default Header;
