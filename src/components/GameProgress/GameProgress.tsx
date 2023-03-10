import React from 'react';

import { IGameProgress } from '../../helpers/types';
import { categories } from '../../helpers/constants';

export const GameProgress: React.FC<IGameProgress> = ({ round = 0 }) => {
  const questionsCount: number = categories.length;
  const gameProgressWidth: number = (100 / questionsCount) * round;

  const gameProgressStyle = {
    width: `${gameProgressWidth}vw`,
  };

  return <div className="game-progress" style={gameProgressStyle} />;
};
