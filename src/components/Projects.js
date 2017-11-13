import React, { Component } from 'react';
import '../stylesheets/Projects.css'
import ProjectLinks from './ProjectLinks'
import ProjectCard from './ProjectCard'

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
        <ProjectCard project={this.state.currentProject} />
      </section>
    )
  }
}

export default Projects;
