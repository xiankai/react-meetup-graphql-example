// @flow
import React, { Component } from 'react';
import './App.css';
import GymContainer from './GymContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GymContainer eligibleRaidBosses={[{ name: 'Tyranitar', type: ['Rock', 'Dark'] }]} />
      </div>
    );
  }
}

export default App;
