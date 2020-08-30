import React from 'react';
import texts from '../../helpers/constants';

export default class Score extends React.Component {
  render() {
    return (
      <div className="score">
        {`${texts.score}: 25`}
      </div>
    );
  }
}
