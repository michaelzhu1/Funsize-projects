import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
class Projects extends Component {
  render() {
    console.log((this.props));
    return (
      <div className="projects">
        <ProjectItem projects={this.props} />
      </div>
    );
  }
}

export default Projects;
