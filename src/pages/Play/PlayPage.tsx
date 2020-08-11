import React from 'react';

import Header from '../../components/Header';

import { IPlayPage } from '../../helpers/interfaces';

const PlayPage:React.FC<IPlayPage> = ({ score, currentQuestion }) => (
  <div className="page_play">
    <Header score={score} currentQuestion={currentQuestion} />
  </div>
);

export default PlayPage;
