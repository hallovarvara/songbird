import React from 'react';

import data from '../../helpers/data';
import { getAudioPath, getImagePath } from '../../helpers/utils';

import AudioPlayer from '../AudioPlayer';

const ShowInfo: React.FC = () => {
  const { title, latin, description, path } = data[0];

  return (
    <div className="show-info__card">
      <img src={getImagePath(path)} alt={title} />
      <h2>{title}</h2>
      <span className="show-info__latin">{latin}</span>
      <AudioPlayer path={getAudioPath(path)} />
      <p className="show-info__description">{description}</p>
    </div>
  );
};

export default ShowInfo;
