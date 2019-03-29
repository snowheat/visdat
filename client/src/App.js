import React, { Component } from 'react';
import Visualization from './components/Visualization';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Visualisasi data jadi mudah ya Bu
        </header>
        <ul>
            <li>Scatter plot</li>
            <li>Bar and line</li>
        </ul>
        <Visualization/>
      </div>
    );
  }
}

export default App;
