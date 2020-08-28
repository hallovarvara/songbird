import React from 'react';
import processClassNames from 'classnames';

import { IQuestionsList } from '../../helpers/interfaces';

const QuestionsList: React.FC<IQuestionsList> = ({ roundsData, currentRoundNumber }) => (
  <ul className="questions-list">
    {roundsData.map(({ id, title, isGuessed }, roundNumber) => (
      <li
        key={id}
        className={processClassNames(
          'questions-list__question',
          { 'questions-list__question_guessed': isGuessed },
          { 'questions-list__question_current': roundNumber === currentRoundNumber },
        )}
      >
        {title}
        {roundNumber !== roundsData.length - 1 && ' →'}
      </li>
    ))}
  </ul>
);

export default QuestionsList;
