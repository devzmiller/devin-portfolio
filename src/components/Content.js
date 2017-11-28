import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition'
import About from './About'
import Projects from './Projects'
import Home from './Home'

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

const Fade = ({ in: inProp, component }) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
      {component}
      </div>
    )}
  </Transition>
);

class Content extends Component {


  render() {
    if (this.props.view === "about") {
      return (
        <main>
          <Fade in={true} component={<About />} />
        </main>
      )
    } else if (this.props.view === "projects") {
      return (
        <main>
          <Fade in={true} component={<Projects />} />
        </main>
      )
    } else if (this.props.view === "home") {
      return (
        <main>
          <Fade in={true} component={<Home />} />
        </main>
      )
    }
  }
}

export default Content;
