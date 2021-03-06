import React, { Component } from 'react';
import './stylesheets/App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "home"
    }
  }

  go(event) {
    this.setState({view: event.target.id})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="name-container">
            <h1 id="home" onClick={(event) => this.go(event)}><span className="dev">Dev</span>in Miller</h1>
          </div>
          <Navbar onClick={(event) => this.go(event)}/>

        </header>
        <Content view={this.state.view}/>
        <footer>This website was created by Devin Miller, 2017-2018. It uses ReactJS and Sass.</footer>
      </div>
    );
  }
}

export default App;
