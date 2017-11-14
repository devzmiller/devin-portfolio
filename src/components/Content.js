import React, { Component } from 'react';
import About from './About'
import Projects from './Projects'
import Home from './Home'

class Content extends Component {
  render() {
    if (this.props.view === "about") {
      return (
        <main>
          <About />
        </main>
      )
    } else if (this.props.view === "projects") {
      return (
        <main>
          <Projects />
        </main>
      )
    } else if (this.props.view === "home") {
      return (
        <main>
          <Home />
        </main>
      )
    }
  }
}

export default Content;
