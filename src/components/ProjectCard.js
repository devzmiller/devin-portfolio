import React, { Component } from 'react';
import '../stylesheets/Projects.css';
import projectData from '../projectData.json';

class ProjectCard extends Component {
  render() {
    let project = this.props.project;

    return (
      <div className="project-card">
        <h2>{projectData[project]["title"]}</h2>
        <a className="single-project-link" href={projectData[project]['url']} target="_blank">Website</a>
        <a className="single-project-link" href={projectData[project]['github-url']} target="_blank">GitHub</a>
        <img src={projectData[project]["image-path"]} className="project-image" alt="project screenshot"/>
        <p>{projectData[project]['description']}</p>
        <p>Technologies used: {projectData[project]['technologies']}</p>
      </div>
    )
  }
}

export default ProjectCard;
