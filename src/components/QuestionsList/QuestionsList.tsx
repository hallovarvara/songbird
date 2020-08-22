import React from 'react';

import { categories } from '../../helpers/constants';

const QuestionsList: React.FC = () => (
  // TODO add here points and currentRound as props
  <ul className="questions-list">
    {Object.entries(categories).map((category) => (
      <li key={category[0]}>{category[1]}</li>
    ))}
  </ul>
);

export default QuestionsList;
