import React, { Component } from 'react';

class Content extends Component {
  render() {
    if (this.props.view === "about") {
      return (
        <main>
          Hi there
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
