import React from 'react';

import { getAudioPath } from '../../helpers/functions';

const StartPage: React.FC = () => {
  return (
    <>
      <span className="test">Hello</span>
      <audio controls>
        <source src={getAudioPath('house-md')} type="audio/mpeg" />
      </audio>
    </>
  );
};

export default StartPage;
