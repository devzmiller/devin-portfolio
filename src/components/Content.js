import React, { Component } from 'react';
import About from './About'

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
          Cats
        </main>
      )
    }
  }
}

export default Content;
