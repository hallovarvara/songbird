import React from 'react';

import { IScore } from '../../helpers/interfaces';
import { getPointsWord } from '../../helpers/get-points-word';

export const Score = ({ score }: IScore) => (
  <div className="score">
    <div className="score__points">{score}</div>
    <div className="score__note">{getPointsWord(score)}</div>
  </div>
);
