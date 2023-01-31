import React from 'react';

import { constants } from '../../helpers/constants';
import { getPointsWord } from '../../helpers/get-points-word';
import { IEndPage } from '../../helpers/interfaces';
import Button from '../../components/basic/Button';

const EndPage: React.FC<IEndPage> = ({ score, maximumScore, handleClick }) => {
  const { youWin, tryAgain, startNewGame } = constants;
  const sumUp = constants.sumUp
    .replace('{points}', String(score))
    .replace('{pointsWord}', getPointsWord(score))
    .replace('{maximumScore}', String(maximumScore));

  return (
    <div className="page_end">
      <p className="page_end__result">{sumUp}</p>
      <p className="page_end__comment">
        {score === maximumScore ? youWin : tryAgain}
      </p>
      <Button
        label={startNewGame}
        handleClick={handleClick}
        classes="page_end__button"
      />
    </div>
  );
};

export default EndPage;
