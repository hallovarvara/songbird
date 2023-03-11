import React from 'react';
import { DICTIONARY } from '@data';
import { IAnswersList } from '@types';
import { handleClassnames } from '@utils/handle-classnames';
import { Button } from '@components/Button';

export const AnswersList: React.FC<IAnswersList> = ({
  shows,
  handleClickToAnswer,
}) => {
  const { answersListTitle } = DICTIONARY;
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
