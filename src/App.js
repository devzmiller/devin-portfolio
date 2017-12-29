import React, { Component } from 'react';
import './stylesheets/App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import githubLogo from './images/GitHub-Mark-64px.png'

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
          <h1 id="home" onClick={(event) => this.go(event)}>Devin Miller</h1>
          <h2>Software Developer | Manager | Book Nerd</h2>
          <div className="social-logos">
            <img src={githubLogo} className="social-logo" alt="my github"/>
          </div>
          <Navbar onClick={(event) => this.go(event)}/>
        </header>
        <Content view={this.state.view}/>
        <footer>This website was created by Devin Miller, 2017. It uses ReactJS and Sass.</footer>
      </div>
    );
  }
}

export default App;
