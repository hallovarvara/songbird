import React from 'react';
import * as _ from 'lodash';

import StartPage from '../../pages/Start';
import EndPage from '../../pages/End';
import PlayPage from '../../pages/Play';

import { constants, categories, maximumAwardForRound, soundPath } from '../../helpers/constants';
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
    currentRoundAward: maximumAwardForRound,
    rightAnswerKey: -1,
  };

  state: IAppState = {
    ...this.initialState,
  };

  audioQueue: HTMLAudioElement[] = [];

  cleanAudioQueue = (): void => {
    this.audioQueue.forEach((audio) => {
      audio.pause();
    });
  };

  playAudio = (isAnswerRight: boolean): void => {
    if (this.audioQueue.length > 1) {
      this.cleanAudioQueue();
    }

    const { success, fail } = soundPath;
    const fileName = isAnswerRight ? success : fail;
    const audioPath = `${process.env.PUBLIC_URL}/ui-sounds/${fileName}.mp3`;
    const audioElement = new Audio(audioPath);

    audioElement.play();
    this.audioQueue = [audioElement];
  };

  setNextRound = (): void => {
    this.setState(
      () => {
        const { round: prevRound, order, shows } = this.state;
        const newRound = prevRound + 1;

        return {
          round: newRound,
          rightAnswerKey: this.getRandomizedRightAnswer(newRound, order, shows),
          currentRoundAward: maximumAwardForRound,
        };
      },
      () => this.setNextRoundData(),
    );
  };

  getRandomizedRightAnswer = (round: number, order: IOrder[], shows: IShows): number => {
    const currentCategoryKey = order[round]?.category;
    return _.random(shows[currentCategoryKey].length - 1);
  };

  setNextRoundData = (): void => {
    const { order, round, rightAnswerKey, shows } = this.state;

    const currentCategoryKey = order[round]?.category;

    const currentShows = shows[currentCategoryKey].map((show, i) => ({
      ...show,
      isAnswer: i === rightAnswerKey,
      isClicked: show.isClicked || false,
    }));

    this.setState(
      {
        currentRoundData: {
          title: categories[currentCategoryKey],
          key: currentCategoryKey,
          shows: currentShows,
          number: round,
          isGuessed: false,
        },
      },
      () => console.log(this.state.currentRoundData),
    );
  };

  startGame = (): void => {
    this.setState({
      ...this.initialState,
      isPlaying: true,
    });
    this.setNextRound();
  };

  reduceRoundAward = (): void => {
    const { currentRoundAward } = this.state;
    const reducedRoundAward = currentRoundAward > 0 ? currentRoundAward - 1 : 0;

    this.setState({
      currentRoundAward: reducedRoundAward,
    });

    console.log('round award', reducedRoundAward);
  };

  updateScore = (): void => {
    const { currentRoundAward, score } = this.state;
    const updatedScore = score + currentRoundAward;
    this.setState({
      score: updatedScore,
    });
    console.log('updated score:', updatedScore);
  };

  handleClickToAnswer = (event: React.SyntheticEvent): void => {
    const clickedButton = event.target as HTMLInputElement;
    const { currentRoundData } = this.state;
    let isRoundGuessed = currentRoundData?.isGuessed || false;

    const updatedShows = currentRoundData?.shows.map((show) => {
      const updatedShow = { ...show };

      if (clickedButton.textContent === show.title) {
        if (!show.isClicked) {
          if (!isRoundGuessed) {
            this.playAudio(show?.isAnswer || false);
            updatedShow.isClicked = true;
          }

          if (show.isAnswer) {
            this.updateScore();
            isRoundGuessed = true;
          } else if (!isRoundGuessed) {
            this.reduceRoundAward();
          }
        }
        console.log(updatedShow); // TODO add here handling this.state.lastClickedShow from App.tsx
      }
      return updatedShow;
    });

    const updatedCurrentRoundData = {
      ...currentRoundData,
      shows: updatedShows,
      isGuessed: isRoundGuessed,
    };

    this.setState({
      currentRoundData: updatedCurrentRoundData,
    });
  };

  handleClickToNextRound = (): void => {
    console.log('round is guessed', this.state);
  };

  render(): React.ReactNode {
    const { title, subtitle } = constants;
    const { isPlaying, isGameEnded, score, currentRoundData } = this.state;

    let currentPage;
    if (isPlaying) {
      currentPage = (
        <PlayPage
          score={score}
          currentRoundData={currentRoundData}
          handleClickToAnswer={this.handleClickToAnswer}
          handleClickToNextRound={this.handleClickToNextRound}
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
