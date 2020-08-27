import React from 'react';

import { categories } from '../../helpers/constants';

const QuestionsList: React.FC = () => (
  // TODO add here points and currentRound as props
  <ul className="questions-list">
    {categories.map(({ id, title }) => (
      <li key={id}>{title}</li>
    ))}
  </ul>
);

export default QuestionsList;
