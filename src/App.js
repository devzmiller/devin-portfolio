import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Devin Miller</h1>
          <Navbar />
        </header>
        <Content />
      </div>
    );
  }
}

export default App;
