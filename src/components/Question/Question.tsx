import React from 'react';
import { IQuestion, IShow } from '@types';
import { DICTIONARY } from '@data';
import { getImagePath } from '@utils/get-image-path';
import { getAudioPath } from '@utils/get-audio-path';
import { Button } from '@components/Button';
import { AudioPlayer } from '@components/AudioPlayer';
import unguessedImagePath from '@assets/images/unguessed.svg';

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
