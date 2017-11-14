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

  go(event) {
    this.setState({currentProject: event.target.id})
  }

  render() {
    return (
      <section className="projects">
        <ProjectLinks onClick={(event) => this.go(event)}/>
        <ProjectCard project={this.state.currentProject} />
      </section>
    )
  }
}

export default Projects;
