import React from 'react';
import { IScore } from '../../helpers/types';
import { WORD_SETS } from '../../helpers/data';
import { getQuantityString } from '../../helpers/utils/get-quantity-string';

export const Score = ({ score }: IScore) => (
  <div className="score">
    <div className="score__points">{score}</div>
    <div className="score__note">{getQuantityString(score, WORD_SETS.points)}</div>
  </div>
);
