import React from 'react';

import {makeKeyByText} from '../../helpers/functions';
import texts from '../../helpers/constants';
import {getSeriesByCategoryAndCount} from '../../helpers/dataService';

export default class AnswersList extends React.Component {
  state = {
    category: texts.categories.comedy // TODO write category changing algorithm
  }

  creatButtonsList = (array) => (
    <form className={className}>
      {
        array.map(
          (category) =>
            <button key={makeKeyByText(category)}>{category}</button>
        )
      }
    </form>
  );

  render() {
    return (
      <section className="answers-list">
        <form className="answers-list__form">
        {this.creatButtonsList(
          getSeriesByCategoryAndCount(this.state.category) // TODO shuffle them
        )}
        </form>
      </section>
    );
  }
}
