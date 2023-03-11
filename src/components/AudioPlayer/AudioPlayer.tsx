import React, { createRef, RefObject } from 'react';
import H5AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { IPlayer } from '@types';
import { DEFAULT_PROGRESS_JUMP_STEP } from '@constants';

export const AudioPlayer = ({ path = '', handleShowAudioPlaying }: IPlayer) => {
  const player: RefObject<H5AudioPlayer> = createRef();

  return (
    <H5AudioPlayer
      src={path}
      ref={player}
      autoPlay={false}
      autoPlayAfterSrcChange={false}
      showJumpControls={false}
      progressJumpStep={DEFAULT_PROGRESS_JUMP_STEP}
      customProgressBarSection={[
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.DURATION,
        RHAP_UI.VOLUME_CONTROLS,
      ]}
      customControlsSection={[]}
      onPlay={() => handleShowAudioPlaying(player?.current?.audio.current)}
    />
  );
};
