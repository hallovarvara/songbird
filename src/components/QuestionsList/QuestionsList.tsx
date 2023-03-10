import React from 'react';
import { handleClassnames } from '../../helpers/utils/handle-classnames';

import { IQuestionsList } from '../../helpers/types';

export const QuestionsList = ({
  roundsData,
  currentRoundNumber,
}: IQuestionsList) => (
  <ul className="questions-list">
    {roundsData.map(({ id, title, isGuessed }, roundNumber) => (
      <li
        key={id}
        className={handleClassnames(
          'questions-list__question',
          { 'questions-list__question_guessed': isGuessed },
          {
            'questions-list__question_current':
              roundNumber === currentRoundNumber,
          },
        )}
      >
        {title}
        {roundNumber !== roundsData.length - 1 && ' →'}
      </li>
    ))}
  </ul>
);
