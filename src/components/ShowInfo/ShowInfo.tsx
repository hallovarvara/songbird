import React from 'react';
import { IShowInfo } from '../../helpers/interfaces';
import { handleClassnames } from '../../helpers/utils/handle-classnames';
import { getImagePath } from '../../helpers/utils/get-image-path';
import { getAudioPath } from '../../helpers/utils/get-audio-path';
import { AudioPlayer } from '../basic/AudioPlayer';

export const ShowInfo: React.FC<IShowInfo> = ({
  show,
  handleShowAudioPlaying,
}) => {
  const { title, originalTitle, description, path, isAnswer } = show;

  return (
    <section className="show-info">
      <div
        className={handleClassnames(
          'show-info__main',
          { 'show-info__main_success': isAnswer },
          { 'show-info__main_fail': !isAnswer },
        )}
      >
        <div className="show-info__title">
          <h2>{title}</h2>
          <p>{originalTitle}</p>
        </div>
        <img
          className="show-info__poster"
          src={getImagePath(path)}
          alt={title}
        />
      </div>
      <AudioPlayer
        path={getAudioPath(path)}
        handleShowAudioPlaying={handleShowAudioPlaying}
      />
      <p className="show-info__description">{description}</p>
    </section>
  );
};
