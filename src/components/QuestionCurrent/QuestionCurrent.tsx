import React from 'react';

import { constants } from '../../helpers/constants';

const QuestionCurrent:React.FC<{questionTitle: string}> = ({ questionTitle }) => (
  <div className="current-question">
    <p className="current-question__title">{questionTitle}</p>
    <p className="current-question__note">{constants.currentQuestion}</p>
  </div>
);

export default QuestionCurrent;
