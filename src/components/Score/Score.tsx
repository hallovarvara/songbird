import React from 'react';
import { IScore } from '@types';
import { WORD_SETS } from '@data';
import { getQuantityString } from '@utils/get-quantity-string';

export const Score = ({ score }: IScore) => (
  <div className="score">
    <div className="score__points">{score}</div>
    <div className="score__note">{getQuantityString(score, WORD_SETS.points)}</div>
  </div>
);
