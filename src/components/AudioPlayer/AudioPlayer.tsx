import React from 'react';

import { IAudioPlayer } from '../../helpers/interfaces';
import { getAudioPath } from '../../helpers/functions';

const AudioPlayer = ({ path = '' }: IAudioPlayer) => (
  <audio className="audio-player" controls>
    <source src={getAudioPath(path)} type="audio/mpeg" />
  </audio>
);

export default AudioPlayer;
