import React from 'react';

import { IButton } from '../../../helpers/interfaces';

const Button = ({ label, handleClick }: IButton) => {

  return (
    <button
      className="button"
      type="button"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
