import React, { Component } from 'react';
import About from './About'
import Projects from './Projects'

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
    }
  }
}

export default Content;
