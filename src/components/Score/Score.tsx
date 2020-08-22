import React from 'react';

import { IScore } from '../../helpers/interfaces';
import { getPointsWord } from '../../helpers/utils';

const Score: React.FC<IScore> = ({ score }) => (
  <div className="score">
    <div className="score__points">{score}</div>
    <div className="score__note">{getPointsWord(score)}</div>
  </div>
);

export default Score;
