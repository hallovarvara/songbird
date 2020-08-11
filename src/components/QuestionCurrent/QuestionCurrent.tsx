import React from 'react';

import { constants } from '../../helpers/constants';
import { IQuestionCurrent } from '../../helpers/interfaces';

const QuestionCurrent:React.FC<IQuestionCurrent> = ({ currentQuestion }) => (
  <div className="current-question">
    <p className="current-question__title">{currentQuestion}</p>
    <p className="current-question__note">{constants.currentQuestion}</p>
  </div>
);

export default QuestionCurrent;
