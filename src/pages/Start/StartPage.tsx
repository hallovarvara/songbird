import React from 'react';

import { constants } from '../../helpers/constants';
import { IHandleClick } from '../../helpers/interfaces';

import { ReactComponent as Logo } from '../../assets/songbird-logo.svg';
import Button from '../../components/basic/Button';

const StartPage = ({ handleClick }: IHandleClick) => {
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
