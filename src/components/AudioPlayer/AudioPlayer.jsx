import React from 'react';

const AudioPlayer = ({ path = '' }) => (
  <div className="audio-player">
    {`play ${path}`}
  </div>
);

export default AudioPlayer;

