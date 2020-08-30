import React from 'react';

import { constants } from '../../helpers/constants';
import { IStartPage } from '../../helpers/interfaces';

import { ReactComponent as Logo } from '../../assets/images/songbird-logo.svg';
import Button from '../../components/basic/Button';

const StartPage: React.FC<IStartPage> = ({ handleClick }) => {
  const { title, subtitle, startGame } = constants;

  return (
    <div className="page_start">
      <Logo />
      <h2>{title.toLowerCase()}</h2>
      <p>{subtitle}</p>
      <Button
        label={startGame}
        handleClick={handleClick}
      />
    </div>
  );
};

export default StartPage;
