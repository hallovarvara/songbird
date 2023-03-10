import React from 'react';

import { IEndPage } from '../../helpers/types';
import { DICTIONARY, WORD_SETS } from '../../helpers/data';
import { getQuantityString } from '../../helpers/utils/get-quantity-string';
import Button from '../../components/basic/Button';

const EndPage: React.FC<IEndPage> = ({ score, maximumScore, handleClick }) => {
  const { youWin, tryAgain, startNewGame } = DICTIONARY;
  const sumUp = DICTIONARY.sumUp
    .replace('{points} {pointsWord}', getQuantityString(score, WORD_SETS.points, true))
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
