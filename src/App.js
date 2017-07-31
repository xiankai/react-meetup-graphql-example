// @flow
import React, { Component } from 'react';
import './App.css';
import GymContainer from './GymContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GymContainer eligibleRaidBosses={[{ name: 'Tyranitar', type: ['Rock', 'Flying'] }]} />
      </div>
    );
  }
}

export default App;
