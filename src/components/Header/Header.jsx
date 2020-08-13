import React from 'react';

import { ReactComponent as Logo } from '../../assets/images/songbird-logo.svg';
import Score from '../Score';
import QuestionsList from '../QuestionsList';

import texts from '../../helpers/constants';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className>Songbird</h1>
        <img src={Logo} alt={texts.logo}/>
        <Score/>
        <QuestionsList/>
      </header>
    );
  }
}
