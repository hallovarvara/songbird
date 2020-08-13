import React from 'react';
import * as _ from 'lodash';

import StartPage from '../../pages/Start';
import EndPage from '../../pages/End';
import PlayPage from '../../pages/Play';

import { constants, categories } from '../../helpers/constants';
import { getCategorizedShows } from '../../helpers/dataService';

import { IAppState, IOrder, IShows } from '../../helpers/interfaces';

class App extends React.Component {
  initialState: IAppState = {
    isPlaying: false,
    isGameEnded: false,
    round: -1,
    score: 0,
    order: Object.keys(categories).map((key) => ({ category: key, points: 0 })),
    shows: getCategorizedShows(),
    currentRoundData: null,
    rightAnswerKey: -1,
  };

  state: IAppState = {
    ...this.initialState,
  };

  startGame = (): void => {
    this.setState({
      ...this.initialState,
      isPlaying: true,
    });
    this.setNextRound();
  };

  setNextRound = ():void => {
    this.setState((state: IAppState) => {
      const { round: prevRound, order, shows } = this.state;
      const newRound = prevRound + 1;

      return {
        round: prevRound + 1,
        rightAnswerKey: this.getRandomizedRightAnswer(newRound, order, shows),
      };
    }, () => this.setNextRoundData());
  }

  getRandomizedRightAnswer = (round: number, order:IOrder[], shows:IShows): number => {
    const currentCategoryKey = order[round]?.category;
    return _.random(shows[currentCategoryKey].length - 1);
  }

  setNextRoundData = () => {
    const {
      order, round, rightAnswerKey, shows,
    } = this.state;

    const currentCategoryKey = order[round]?.category;

    const currentShows = shows[currentCategoryKey].map((show, i) => ({
      ...show,
      isAnswer: i === rightAnswerKey,
    }));

    this.setState({
      currentRoundData: {
        title: categories[currentCategoryKey],
        key: currentCategoryKey,
        shows: currentShows,
        number: round,
        isGuessed: false,
      },
    }, () => console.log(this.state.currentRoundData));
  }

  render(): React.ReactNode {
    const { title, subtitle } = constants;
    const {
      isPlaying, isGameEnded, score, currentRoundData,
    } = this.state;

    let currentPage;
    if (isPlaying) {
      currentPage = (
        <PlayPage
          score={score}
          currentRound={currentRoundData}
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
