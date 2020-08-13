import React from 'react';

import { constants } from '../../helpers/constants';
import { IHandleClick } from '../../helpers/interfaces';

import { ReactComponent as Logo } from '../../images/songbird-logo.svg';
import Button from '../../components/basic/Button';

const StartPage: React.FC<IHandleClick> = ({ handleClick }) => {
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
