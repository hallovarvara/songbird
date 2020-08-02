import React from 'react';

import texts from '../../helpers/constants';
import unguessedBirdImage from '../../assets/images/unguessed-bird.svg';
import AudioPlayer from '../AudioPlayer';

export default class QuestionsList extends React.Component {
  render() {
    return (
      <section className="question">
        <img src={unguessedBirdImage} alt={texts.chooseAnswer}/>
        <p>*******</p> {/* TODO exchange for bird name component*/}
        <AudioPlayer path="" />
      </section>
    );
  }
};
