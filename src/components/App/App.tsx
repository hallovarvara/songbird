import React from 'react';

import StartPage from '../../pages/Start';
import EndPage from '../../pages/End';
import PlayPage from '../../pages/Play';

import { constants } from '../../helpers/constants';

class App extends React.Component {
  state = {
    isGameStarted: false,
    isGameEnded: false,
  }

  startGame = (): void => {
    this.setState({
      isGameStarted: true,
    });
  }

  render(): React.ReactNode {
    const { title, subtitle } = constants;
    const { isGameStarted, isGameEnded } = this.state;

    let currentPage;
    if (isGameStarted) {
      currentPage = <PlayPage />;
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
// const App: React.FC = () => {
//   const { title, subtitle } = constants;
//   return (
//     <>
//       <div className="app__content">
//         <h1>{`${title} ${subtitle}`}</h1>
//         <StartPage  />
//       </div>
//       <div className="app__background" />
//     </>
//   );
// };

export default App;
