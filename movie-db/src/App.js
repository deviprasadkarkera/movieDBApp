import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MovieDashboard from './movieDashboard';
import './App.css';
import './animate.css';

const App1 = () => (
  <MuiThemeProvider>
    <MovieDashboard />
  </MuiThemeProvider>
);
class App extends Component {
  render() {
    return (

      <div className="App">
      
       <App1 />

      </div>
    );
  }
}

export default App;
