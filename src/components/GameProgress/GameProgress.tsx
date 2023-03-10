import React from 'react';

import { IGameProgress } from '../../helpers/types';
import { CATEGORIES } from '../../helpers/data';

export const GameProgress: React.FC<IGameProgress> = ({ round = 0 }) => {
  const questionsCount: number = CATEGORIES.length;
  const gameProgressWidth: number = (100 / questionsCount) * round;

  const gameProgressStyle = {
    width: `${gameProgressWidth}vw`,
  };

  return <div className="game-progress" style={gameProgressStyle} />;
};
