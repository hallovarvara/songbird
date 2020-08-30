import React from 'react';

import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import { IPlayer } from '../../../helpers/interfaces';
import { defaultProgressJumpStep } from '../../../helpers/constants';

const AudioPlayer = ({ path = '' }: IPlayer) => (
  <H5AudioPlayer
    src={path}
    autoPlay={false}
    autoPlayAfterSrcChange={false}
    showJumpControls={false}
    progressJumpStep={defaultProgressJumpStep}
    customProgressBarSection={[
      RHAP_UI.MAIN_CONTROLS,
      RHAP_UI.CURRENT_TIME,
      RHAP_UI.PROGRESS_BAR,
      RHAP_UI.DURATION,
      RHAP_UI.VOLUME_CONTROLS,
    ]}
    customControlsSection={[]}
  />
);

export default AudioPlayer;
