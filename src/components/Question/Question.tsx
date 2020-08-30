import React from 'react';

import { constants } from '../../helpers/constants';
import unguessedImage from '../../assets/images/unguessed.svg';
import AudioPlayer from '../basic/AudioPlayer';
import { IQuestion, IShow } from '../../helpers/interfaces';
import Button from '../basic/Button';
import { getAudioPath, getImagePath } from '../../helpers/utils';

const getRoundData = (data: IShow, isGuessed: boolean) => {
  let roundData = {
    imagePath: unguessedImage,
    audioPath: getAudioPath(data.path),
    title: '***',
  };

  if (isGuessed && data) {
    roundData = {
      ...roundData,
      imagePath: getImagePath(data.path),
      title: data.title,
    };
  }

  return roundData;
};

const Question: React.FC<IQuestion> = ({ answer, isGuessed, handleClickToNextRound }) => {
  const { nextQuestion } = constants;
  const { imagePath, audioPath, title } = getRoundData(answer, isGuessed);

  const posterStyles = {
    backgroundImage: `url(${imagePath})`,
  };

  return (
    <section className="question">
      <div className="question__content">
        <div className="question__poster" style={posterStyles} />
        <div className="question__info">
          <p>{title}</p>
          <AudioPlayer path={audioPath} />
        </div>
      </div>
      <Button
        label={nextQuestion}
        classes="question__button"
        handleClick={handleClickToNextRound}
        disabled={!isGuessed}
      />
    </section>
  );
};

export default Question;
