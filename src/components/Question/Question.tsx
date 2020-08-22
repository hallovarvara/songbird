import React from 'react';

import { constants } from '../../helpers/constants';
import unguessedImage from '../../assets/images/unguessed.svg';
import AudioPlayer from '../AudioPlayer';
import { IQuestion, IShow } from '../../helpers/interfaces';
import Button from '../basic/Button';
import { getAudioPath, getImagePath } from '../../helpers/utils';

const getRoundData = (data: IShow | undefined, isGuessed: boolean) => {
  let roundData = {
    imagePath: unguessedImage,
    audioPath: getAudioPath(data?.path || 'house-md'),
    title: '***',
  };

  if (isGuessed && data) {
    roundData = {
      imagePath: getImagePath(data.path),
      audioPath: getAudioPath(data.path),
      title: data.title,
    };
  }

  return roundData;
};

const Question: React.FC<IQuestion> = ({ answer, isGuessed, handleClickToNextRound }) => {
  const { chooseAnswer, nextQuestion } = constants;
  const { imagePath, audioPath, title } = getRoundData(answer, isGuessed);

  if (!answer) {
    return <div>Загрузка...</div>; // TODO implement cozy loader
  }

  return (
    <section className="question">
      <div className="question__content">
        <img src={imagePath} alt={chooseAnswer} />
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
