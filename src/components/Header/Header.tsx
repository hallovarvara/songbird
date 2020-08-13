import React from 'react';

import { ReactComponent as Logo } from '../../images/songbird-logo.svg';
import QuestionCurrent from '../QuestionCurrent';
import Score from '../Score';

import { IHeader } from '../../helpers/interfaces';

const Header:React.FC<IHeader> = ({ score, currentRound }) => (
  <header>
    <Logo />
    <QuestionCurrent questionTitle={currentRound?.title || ''} />
    <Score score={score} />
  </header>
);

export default Header;
