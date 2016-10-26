import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SurveyBox from './components/surveybox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SurveyBox />
      </div>
    );
  }
}

export default App;
