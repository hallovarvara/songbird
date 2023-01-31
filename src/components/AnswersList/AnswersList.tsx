import React from 'react';
import { handleClassnames } from '../../helpers/utils/handle-classnames';
import { IAnswersList } from '../../helpers/interfaces';
import Button from '../basic/Button';

import { constants } from '../../helpers/constants';

export const AnswersList: React.FC<IAnswersList> = ({
  shows,
  handleClickToAnswer,
}) => {
  const { answersListTitle } = constants;
  return (
    <section className="answers-list">
      <div className="answers-list__title">{answersListTitle}</div>
      {shows.map(({ title, path, isClicked, isAnswer }, showIndex) => (
        <Button
          label={title}
          key={path}
          classes={handleClassnames(
            'answers-list__button',
            { 'answers-list__button_clicked-right': isClicked && isAnswer },
            { 'answers-list__button_clicked-wrong': isClicked && !isAnswer },
          )}
          handleClick={() => handleClickToAnswer(showIndex)}
        />
      ))}
    </section>
  );
};
