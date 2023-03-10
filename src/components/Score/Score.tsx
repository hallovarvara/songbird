import React from 'react';

import { IScore } from '../../helpers/types';
import { wordSets } from '../../helpers/constants';
import { getQuantityString } from '../../helpers/utils/get-quantity-string';

export const Score = ({ score }: IScore) => (
  <div className="score">
    <div className="score__points">{score}</div>
    <div className="score__note">{getQuantityString(score, wordSets.points)}</div>
  </div>
);
