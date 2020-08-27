import React from 'react';

import StartPage from '../../pages/Start';
import EndPage from '../../pages/End';
import PlayPage from '../../pages/Play';

import { constants, soundPath } from '../../helpers/constants';
import { getRoundsData } from '../../helpers/dataService';

import { IAppState, IRoundData } from '../../helpers/interfaces';

class App extends React.Component {
  initialState: IAppState = {
    isPlaying: false,
    isGameEnded: false,
    score: 0,
    currentRoundNumber: -1,
    roundsData: getRoundsData(),
    lastClickedShowNumber: -1,
  };

  state: IAppState = {
    ...this.initialState,
  };

  /* Audio */

  audioQueue: HTMLAudioElement[] = [];

  cleanAudioQueue = (): void => {
    this.audioQueue.forEach((audio) => {
      audio.pause();
    });
  };

  playUIAudio = (isAnswerRight: boolean): void => {
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
      ({ currentRoundNumber: prevRoundNumber }: IAppState) => ({
        currentRoundNumber: prevRoundNumber + 1,
      }),
      () => {
        console.log(this.state.currentRoundNumber);
      },
    );
    this.updateLastClickedShowNumber(this.initialState.lastClickedShowNumber);
  };

  startGame = (): void => {
    this.setState({
      ...this.initialState,
      isPlaying: true,
    });
    this.setNextRound();
  };

  updateCurrentRoundData = (newCurrentRoundData: IRoundData): void => {
    const { roundsData, currentRoundNumber } = this.state;

    const updatedRoundsData = [
      ...roundsData.slice(0, currentRoundNumber),
      newCurrentRoundData,
      ...roundsData.slice(currentRoundNumber + 1),
    ];

    this.setState({
      roundsData: updatedRoundsData,
    });
  };

  updateScore = (): void => {
    this.setState(
      ({ score: prevScore, roundsData, currentRoundNumber }: IAppState) => ({
        score: prevScore + roundsData[currentRoundNumber].award,
      }),
      () => console.log('updated score:', this.state.score),
    );
  };

  updateLastClickedShowNumber = (newIndex: number): void => {
    this.setState({
      lastClickedShowNumber: newIndex,
    });
  };

  handleClickToAnswerNew = (clickedShowIndex: number): void => {
    const { roundsData, currentRoundNumber } = this.state;
    const round = roundsData[currentRoundNumber];

    const clickedShowTitle = round.shows[clickedShowIndex].title;
    let isRoundGuessed = round.isGuessed;
    let roundAward = round.award;

    const newShows = round.shows.map((show) => {
      const newShow = { ...show };

      if (show.title === clickedShowTitle && !show.isClicked) {
        if (!isRoundGuessed) {
          this.playUIAudio(show.isAnswer);
          newShow.isClicked = true;
        }

        if (show.isAnswer) {
          this.updateScore();
          isRoundGuessed = true;
        } else if (!isRoundGuessed) {
          roundAward = roundAward > 0 ? roundAward - 1 : 0;
        }

        console.log('clicked show:', newShow);
      }

      return newShow;
    });

    console.log(isRoundGuessed ? 'round`s guessed' : 'keep guessing');

    const newRoundData = {
      ...round,
      shows: newShows,
      isGuessed: isRoundGuessed,
      award: roundAward,
    };

    this.updateCurrentRoundData(newRoundData);
    this.updateLastClickedShowNumber(clickedShowIndex);
  };

  handleClickToNextRound = (): void => {
    console.log('round is guessed', this.state);
  };

  render(): React.ReactNode {
    const { title, subtitle } = constants;
    const {
      isPlaying,
      isGameEnded,
      score,
      roundsData,
      currentRoundNumber,
      lastClickedShowNumber,
    } = this.state;

    let currentPage;
    if (isPlaying) {
      currentPage = (
        <PlayPage
          score={score}
          currentRoundData={roundsData[currentRoundNumber]}
          roundNumber={currentRoundNumber}
          handleClickToAnswer={this.handleClickToAnswerNew}
          handleClickToNextRound={this.handleClickToNextRound}
          lastClickedShowNumber={lastClickedShowNumber}
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
