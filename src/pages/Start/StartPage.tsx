import React from 'react';
import { IStartPage } from '@types';
import { DICTIONARY } from '@data';
import { ReactComponent as Logo } from '@assets/images/songbird-logo.svg';
import { Button } from '@components/Button';

export const StartPage: React.FC<IStartPage> = ({ handleClick }) => {
  const { title, subtitle, startGame } = DICTIONARY;

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
