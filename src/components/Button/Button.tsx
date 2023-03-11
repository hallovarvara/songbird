import React from 'react';

import { IButton } from '@types';

export const Button: React.FC<IButton> = ({
  label,
  handleClick,
  classes = '',
  disabled = false,
}) => (
  <button
    className={`button${classes && ` ${classes}`}`}
    type="button"
    onClick={handleClick}
    disabled={disabled}
  >
    {label}
  </button>
);
