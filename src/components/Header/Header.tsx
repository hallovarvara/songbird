import React from 'react';

import { ReactComponent as Logo } from '../../assets/images/songbird-logo.svg';
import QuestionCurrent from '../QuestionCurrent';
import Score from '../Score';

import { IHeader } from '../../helpers/interfaces';

const Header: React.FC<IHeader> = ({ score, currentRoundData }) => (
  <header>
    <Logo />
    <QuestionCurrent questionTitle={currentRoundData?.title || ''} />
    <Score score={score} />
  </header>
);

export default Header;
