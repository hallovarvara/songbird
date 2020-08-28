import React from 'react';

import { IAudioPlayer } from '../../../helpers/interfaces';

const AudioPlayer = ({ path = '' }: IAudioPlayer) => (
  <audio className="audio-player" controls>
    <source src={path} type="audio/mpeg" />
  </audio>
);

export default AudioPlayer;
