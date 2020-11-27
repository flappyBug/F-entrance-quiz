import React, { Component } from 'react';
import './App.scss';
import GroupList from './components/group-list';
import StudentList from './components/student-list';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
      </div>
    );
  }
}

export default App;
