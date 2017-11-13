import React, { Component } from 'react';
import '../Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li id='about' onClick={this.props.onClick}>About</li>
          <li id='projects' onClick={this.props.onClick}>Projects</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
