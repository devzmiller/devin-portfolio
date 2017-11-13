import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "about"
    }
  }

  go(event) {
    this.setState({view: event.target.id})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Devin Miller</h1>
          <Navbar onClick={(event) => this.go(event)}/>
        </header>
        <Content view={this.state.view}/>
      </div>
    );
  }
}

export default App;
