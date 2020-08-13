import React from 'react';

import { IGameProgress } from '../../helpers/interfaces';
import { categories } from '../../helpers/constants';

const GameProgress: React.FC<IGameProgress> = ({ round = 0 }) => {
  const questionsCount: number = Object.keys(categories).length;
  const gameProgressWidth: number = (100 / questionsCount) * round;

  const gameProgressStyle = {
    width: `${gameProgressWidth}vw`,
  };

  return (
    <div
      className="game-progress"
      style={gameProgressStyle}
    />
  );
};

export default GameProgress;
