import React, { Component } from 'react';
import './App.css';
import SurveyBox from './components/surveybox.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <SurveyBox />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
