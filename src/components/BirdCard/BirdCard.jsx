import React from 'react';

import {data} from '../../helpers/data';
import AudioPlayer from '../AudioPlayer';

export default class BirdCard extends React.Component {
  state = {
    bird: data[0] // TODO unmock bird data
  }

  render() {
    const {
      title,
      latin,
      description,
      imagePath,
      audioPath,
    } = this.state.bird;

    return(
      <div className="bird-info__card">
        <img src={imagePath} alt={title} />
        <h2>{title}</h2>
        <span className="bird-info__latin">{latin}</span>
        <AudioPlayer path={audioPath} />
        <p className="bird-info__description">{description}</p>
      </div>
    );
  }
}
