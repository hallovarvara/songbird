import React from 'react';
import { IQuestionsList } from '@types';
import { handleClassnames } from '@utils/handle-classnames';

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
