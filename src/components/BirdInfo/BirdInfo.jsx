import React from 'react';
import BirdCard from '../ShowInfo';
import texts from '../../helpers/constants';

export default class BirdInfo extends React.Component {
  state = {
    isFilled: false,
    info: null,
  };

  render() {
    return (
      <section className="bird-info">
        {this.state.isFilled ? (
          <BirdCard />
        ) : (
          <p className="bird-info__choose">{texts.chooseAnswer}</p>
        )}
      </section>
    );
  }
}
