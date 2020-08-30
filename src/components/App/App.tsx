import React from 'react';

import StartPage from '../../pages/Start';
import EndPage from '../../pages/End';
import PlayPage from '../../pages/Play';

import { constants, soundPath, maximumAwardForRound } from '../../helpers/constants';
import { getRoundsData } from '../../helpers/dataService';

import { IAppState, IHandleClickAudioPlaying, IRoundData } from '../../helpers/interfaces';

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

  UIAudioQueue: HTMLAudioElement[] = [];

  showsAudioQueue: HTMLAudioElement[] = [];

  get maximumScore(): number {
    const { roundsData } = this.state;
    return roundsData.length * maximumAwardForRound;
  }

  cleanAudioQueue = (queue: HTMLAudioElement[]): [] => {
    queue.forEach((audio) => {
      audio.pause();
    });
    return [];
  };

  pauseAllShowsAudio = (): void => {
    this.showsAudioQueue.forEach((audio) => {
      audio.pause();
    });
  };

  handleShowAudioPlaying: IHandleClickAudioPlaying = (audio) => {
    let isAudioInQueue: boolean = false;

    if (this.showsAudioQueue.length < 1) {
      this.showsAudioQueue.push(audio || new Audio());
      isAudioInQueue = true;
    } else {
      this.showsAudioQueue.forEach((audioInQueue) => {
        if (audioInQueue === audio) {
          isAudioInQueue = true;
        } else {
          audioInQueue.pause();
        }
      });
    }

    if (!isAudioInQueue) {
      this.showsAudioQueue.push(audio || new Audio());
    }
  };

  playUIAudio = (isAnswerRight: boolean): void => {
    if (this.UIAudioQueue.length > 1) {
      this.UIAudioQueue = this.cleanAudioQueue(this.UIAudioQueue);
    }

    const { success, fail } = soundPath;
    const fileName = isAnswerRight ? success : fail;
    const audioPath = `${process.env.PUBLIC_URL}/ui-sounds/${fileName}.mp3`;
    const audioElement = new Audio(audioPath);

    audioElement.play();
    this.UIAudioQueue.push(audioElement);
  };

  goNext = (): void => {
    const { currentRoundNumber: prevRoundNumber, roundsData } = this.state;

    if (prevRoundNumber < roundsData.length - 1) {
      this.setState({
        currentRoundNumber: prevRoundNumber + 1,
        lastClickedShowNumber: this.initialState.lastClickedShowNumber,
      });
      // eslint-disable-next-line no-console
      console.log(
        `Правильный ответ раунда «${roundsData[prevRoundNumber + 1].title}» — «${roundsData[
          prevRoundNumber + 1
        ].shows.reduce((rightAnswer, show) => (show.isAnswer ? show.title : rightAnswer), '')}»`,
      );
    } else {
      this.setState({
        isPlaying: false,
        isGameEnded: true,
        lastClickedShowNumber: this.initialState.lastClickedShowNumber,
      });
    }
  };

  startGame = (): void => {
    this.setState({
      isPlaying: true,
    });
    this.goNext();
  };

  restartGame = (): void => {
    this.setState(
      {
        ...this.initialState,
        roundsData: getRoundsData(),
      },
      this.startGame,
    );
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
    this.setState(({ score: prevScore, roundsData, currentRoundNumber }: IAppState) => ({
      score: prevScore + roundsData[currentRoundNumber].award,
    }));
  };

  updateLastClickedShowNumber = (newIndex: number): void => {
    this.setState({
      lastClickedShowNumber: newIndex,
    });
  };

  handleClickToAnswer = (clickedShowIndex: number): void => {
    const { roundsData, currentRoundNumber } = this.state;
    const currentRound = roundsData[currentRoundNumber];
    const currentShow = { ...roundsData[currentRoundNumber].shows[clickedShowIndex] };

    this.updateLastClickedShowNumber(clickedShowIndex);

    if (!currentShow.isClicked) {
      if (!currentRound.isGuessed) {
        this.playUIAudio(currentShow.isAnswer);
        currentShow.isClicked = true;
      }

      if (currentShow.isAnswer) {
        this.updateScore();
        this.pauseAllShowsAudio();
      }

      this.updateCurrentRoundData({
        ...currentRound,
        shows: [
          ...currentRound.shows.slice(0, clickedShowIndex),
          currentShow,
          ...currentRound.shows.slice(clickedShowIndex + 1),
        ],
        isGuessed: currentShow.isAnswer || currentRound.isGuessed,
        award:
          currentShow.isAnswer || currentRound.isGuessed
            ? currentRound.award
            : currentRound.award - 1,
      });
    }
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
          roundsData={roundsData}
          currentRoundNumber={currentRoundNumber}
          handleClickToAnswer={this.handleClickToAnswer}
          handleClickToNextRound={this.goNext}
          lastClickedShowNumber={lastClickedShowNumber}
          handleShowAudioPlaying={this.handleShowAudioPlaying}
        />
      );
    } else if (isGameEnded) {
      currentPage = (
        <EndPage score={score} maximumScore={this.maximumScore} handleClick={this.restartGame} />
      );
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
