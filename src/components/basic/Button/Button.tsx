import React from 'react';

import { IButton } from '../../../helpers/interfaces';

const Button: React.FC<IButton> = ({
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

export default Button;
