import React from 'react';
import { IQuestion, IShow } from '../../helpers/types';
import unguessedImagePath from '../../assets/images/unguessed.svg';
import { DICTIONARY } from '../../helpers/data';
import { getImagePath } from '../../helpers/utils/get-image-path';
import { getAudioPath } from '../../helpers/utils/get-audio-path';
import { AudioPlayer } from '../basic/AudioPlayer';
import Button from '../basic/Button';

const getRoundData = (data: IShow, isGuessed: boolean) => {
  let roundData = {
    imagePath: unguessedImagePath,
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
  const { nextQuestion } = DICTIONARY;
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
