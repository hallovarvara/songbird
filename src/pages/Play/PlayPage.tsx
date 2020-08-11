import React from 'react';

import Header from '../../components/Header';

import { IPlayPage } from '../../helpers/interfaces';
import GameProgress from '../../components/GameProgress';

const PlayPage:React.FC<IPlayPage> = ({ score, currentQuestion, round }) => (
  <div className="page_play">
    <GameProgress round={round} />
    <Header score={score} currentQuestion={currentQuestion} />
  </div>
);

export default PlayPage;
