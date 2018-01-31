import React, { Component } from 'react';
import '../stylesheets/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li id='about' onClick={this.props.onClick}>About</li>
          <li id='projects' onClick={this.props.onClick}>Projects</li>
          <li id='contact' onClick={this.props.onClick}>Contact</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
