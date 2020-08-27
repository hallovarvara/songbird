import React from 'react';
import processClassNames from 'classnames';

import { IQuestionsList } from '../../helpers/interfaces';
import { getPointsWord } from '../../helpers/utils';

const QuestionsList: React.FC<IQuestionsList> = ({ roundsData }) => (
  <ul className="questions-list">
    {roundsData.map(({ id, title, award, isGuessed }) => (
      <li
        key={id}
        className={processClassNames('questions-list__question', {
          'questions-list__question_guessed': isGuessed,
        })}
      >
        {title}
        <span className="questions-list__points">{`${award} ${getPointsWord(award)}`}</span>
      </li>
    ))}
  </ul>
);

export default QuestionsList;
