import React from 'react';
import processClassNames from 'classnames';

import { IAnswersList /* IShow */ } from '../../helpers/interfaces';
import Button from '../basic/Button';

import { constants } from '../../helpers/constants';

const AnswersList: React.FC<IAnswersList> = ({ shows, handleClickToAnswer }) => {
  const { answersListTitle } = constants;
  return (
    <section className="answers-list">
      <div className="answers-list__title">{answersListTitle}</div>
      {!shows ? (
        <div>Loading...</div> // TODO implement cozy loader
      ) : (
        shows.map(({ title, path, isClicked, isAnswer }, showIndex) => (
          <Button
            label={title}
            key={path}
            classes={processClassNames(
              'answers-list__button',
              { 'answers-list__button_clicked-right': isClicked && isAnswer },
              { 'answers-list__button_clicked-wrong': isClicked && !isAnswer },
            )}
            handleClick={() => handleClickToAnswer(showIndex)}
          />
        ))
      )}
    </section>
  );
};

export default AnswersList;
