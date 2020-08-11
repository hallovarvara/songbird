import React from 'react';

import { ReactComponent as Logo } from '../../assets/songbird-logo.svg';
import QuestionCurrent from '../QuestionCurrent';
import Score from '../Score';

import { IHeader } from '../../helpers/interfaces';

const Header:React.FC<IHeader> = ({ score, currentQuestion }) => (
  <header>
    <Logo />
    <QuestionCurrent currentQuestion={currentQuestion} />
    <Score score={score} />
  </header>
);

export default Header;
