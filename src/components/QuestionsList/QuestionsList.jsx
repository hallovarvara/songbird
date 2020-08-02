import React from 'react';

import texts from '../../helpers/constants';
import {makeKeyByText} from '../../helpers/functions';

export default class QuestionsList extends React.Component {
  createList = () => (
    <ul className="questions-list">
      {
        Object.values(texts.categories).map(
          (category) =>
            <li key={makeKeyByText(category)}>{category}</li>
        )
      }
    </ul>
  );

  render() {
    return this.createList();
  }
}
