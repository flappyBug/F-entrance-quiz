import React, { Component } from 'react';
import './App.scss';
import GroupList from './components/group-list';
import TraineeList from './components/trainee-list';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
