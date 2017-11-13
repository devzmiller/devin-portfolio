import React, { Component } from 'react';
import '../stylesheets/Projects.css'

class ProjectLinks extends Component {
  render() {
    return (
      <div className="project-links">
        <ul>
          <li id="docsforus" onClick={this.props.onClick}>DocsForUs</li>
          <li id="mosaicmaker" onClick={this.props.onClick}>Mosaic Maker</li>
          <li id="rutherford" onClick={this.props.onClick}>Rutherford Rocket Labs</li>
        </ul>
      </div>
    )
  }
}

export default ProjectLinks;
