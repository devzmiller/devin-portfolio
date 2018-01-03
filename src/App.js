import React, { Component } from 'react';
import './stylesheets/App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import githubLogo from './images/GitHub-Mark-32px.png';
import linkedinLogo from './images/In-Black-34px-TM.png';
import emailLogo from './images/2000px-Aiga_mail.svg.png';

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
          <Navbar onClick={(event) => this.go(event)}/>
          <div className="social-logos">
            <a href="mailto:devzmiller@gmail.com"><img src={emailLogo} className="social-logo" alt="my email"/></a>
            <a href="https://github.com/devzmiller" target="_blank"><img src={githubLogo} className="social-logo" alt="my github"/></a>
            <a href="https://www.linkedin.com/in/devzmiller/" target="_blank"><img src={linkedinLogo} className="social-logo" alt="my linkedin"/></a>
          </div>
        </header>
        <Content view={this.state.view}/>
        <footer>This website was created by Devin Miller, 2017. It uses ReactJS and Sass.</footer>
      </div>
    );
  }
}

export default App;
