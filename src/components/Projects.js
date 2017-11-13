import React, { Component } from 'react';
import '../stylesheets/Projects.css'
import ProjectLinks from './ProjectLinks'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      currentProject: "docsforus"
    }
  }

  render() {
    return (
      <section className="projects">
        <ProjectLinks />
      </section>
    )
  }
}

export default Projects;
