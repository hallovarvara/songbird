import React from 'react';

import { IGameProgress } from '../../helpers/interfaces';
import { categories } from '../../helpers/constants';

const GameProgress: React.FC<IGameProgress> = ({ round }) => {
  const questionsCount: number = Object.keys(categories).length;
  const gameProgressWidth: number = (100 / questionsCount) * round;

  const GameProgressStyle = {
    width: `${gameProgressWidth}vw`,
  };

  return (
    <div
      className="game-progress"
      style={GameProgressStyle}
    />
  );
};

export default GameProgress;
