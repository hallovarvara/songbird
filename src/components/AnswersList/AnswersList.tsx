import React from 'react';
import processClassNames from 'classnames';

import { IAnswersList, /* IShow */ } from '../../helpers/interfaces';
import Button from '../basic/Button';

import { constants } from '../../helpers/constants';
// import { getSeriesByCategoryAndCount } from '../../helpers/dataService';

// const createButtonsList = (shows: IShow[] | undefined): React.ReactNode => (
//   !shows
//     ? <div>Loading...</div> // TODO implement cozy loader
//     : shows.map(({ title, path }) => (
//       <Button
//         label={title}
//         key={path}
//         classes="answers-list__button"
//         onClick={() => handleClick(path)}
//       />
//     ))
// );

// const processClasses

const AnswersList: React.FC<IAnswersList> = ({ shows, handleClickToAnswer }) => {
  const { answersListTitle } = constants;
  return (
    <section className="answers-list">
      <div className="answers-list__title">{answersListTitle}</div>
      {
        !shows
          ? <div>Loading...</div> // TODO implement cozy loader
          : shows.map(({
            title, path, isClicked, isAnswer,
          }) => (
            <Button
              label={title}
              key={path}
              classes={
                processClassNames(
                  'answers-list__button',
                  { 'answers-list__button_clicked-right': isClicked && isAnswer },
                  { 'answers-list__button_clicked-wrong': isClicked && !isAnswer },
                )
              }
              handleClick={handleClickToAnswer}
            />
          ))
      }
    </section>
  );
};

export default AnswersList;

// export class AL extends React.Component {
//   state = {
//     category: categories.comedy, // TODO write category changing algorithm
//   };
//
//   creatButtonsList = (array) => (
//     <form className={className}>
//       {array.map((category) => (
//         <button key={makeKeyByText(category)}>{category}</button>
//       ))}
//     </form>
//   );
//
//   render() {
//     return (
//       <section className="answers-list">
//         <form className="answers-list__form">
//           {this.creatButtonsList(
//             getSeriesByCategoryAndCount(this.state.category), // TODO shuffle them
//           )}
//         </form>
//       </section>
//     );
//   }
// }
