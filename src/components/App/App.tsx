import React from 'react';

import StartPage from '../../pages/Start';
import EndPage from '../../pages/End';
import PlayPage from '../../pages/Play';

import { constants, categories } from '../../helpers/constants';
import { getCategorizedShows } from '../../helpers/dataService';

class App extends React.Component {
  initialState = {
    isPlaying: false,
    isGameEnded: false,
    round: 0,
    score: 0,
    order: Object.keys(categories).map((key) => ({ category: key, points: 0 })),
    shows: getCategorizedShows(),
  };

  state = {
    ...this.initialState,
  };

  startGame = (): void => {
    this.setState({
      ...this.initialState,
      isPlaying: true,
    });
  };

  render(): React.ReactNode {
    const { title, subtitle } = constants;
    const {
      isPlaying, isGameEnded, score, round, order,
    } = this.state;
    const currentQuestion = categories[order[round]?.category];

    let currentPage;
    if (isPlaying) {
      currentPage = (
        <PlayPage
          score={score}
          currentQuestion={currentQuestion}
          round={round}
        />
      );
    } else if (isGameEnded) {
      currentPage = <EndPage />;
    } else {
      currentPage = <StartPage handleClick={this.startGame} />;
    }

    return (
      <>
        <div className="app__content">
          <h1>{`${title} ${subtitle}`}</h1>
          {currentPage}
        </div>
        <div className="app__background" />
      </>
    );
  }
}

export default App;
