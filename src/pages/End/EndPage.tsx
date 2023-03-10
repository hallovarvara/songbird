import React from 'react';

import { IEndPage } from '../../helpers/types';
import { constants, wordSets } from '../../helpers/constants';
import { getQuantityString } from '../../helpers/utils/get-quantity-string';
import Button from '../../components/basic/Button';

const EndPage: React.FC<IEndPage> = ({ score, maximumScore, handleClick }) => {
  const { youWin, tryAgain, startNewGame } = constants;
  const sumUp = constants.sumUp
    .replace('{points} {pointsWord}', getQuantityString(score, wordSets.points, true))
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
