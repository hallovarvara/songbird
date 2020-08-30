import React from 'react';
import processClassNames from 'classnames';

import { getAudioPath, getImagePath } from '../../helpers/utils';

import AudioPlayer from '../basic/AudioPlayer';
import { IShowInfo } from '../../helpers/interfaces';

const ShowInfo: React.FC<IShowInfo> = ({ show }) => {
  const { title, originalTitle, description, path, isAnswer } = show;

  return (
    <section className="show-info">
      <div
        className={processClassNames(
          'show-info__main',
          { 'show-info__main_success': isAnswer },
          { 'show-info__main_fail': !isAnswer },
        )}
      >
        <div className="show-info__title">
          <h2>{title}</h2>
          <p>{originalTitle}</p>
        </div>
        <img className="show-info__poster" src={getImagePath(path)} alt={title} />
      </div>
      <AudioPlayer path={getAudioPath(path)} />
      <p className="show-info__description">{description}</p>
    </section>
  );
};

export default ShowInfo;
