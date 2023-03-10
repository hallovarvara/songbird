import React from 'react';

import { constants } from '../../helpers/constants';
import unguessedImage from '../../assets/images/unguessed.svg';
import { AudioPlayer } from '../basic/AudioPlayer';
import { IQuestion, IShow } from '../../helpers/types';
import Button from '../basic/Button';
import { getImagePath } from '../../helpers/utils/get-image-path';
import { getAudioPath } from '../../helpers/utils/get-audio-path';

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

export const Question: React.FC<IQuestion> = ({
  answer,
  isGuessed,
  handleClickToNextRound,
  handleShowAudioPlaying,
}) => {
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
          <AudioPlayer
            path={audioPath}
            handleShowAudioPlaying={handleShowAudioPlaying}
          />
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
