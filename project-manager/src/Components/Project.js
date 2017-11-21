import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Projects extends Component {
  render() {
    let projectItems;
    // console.log((this.props));
    if (this.props.projects) {
      projectItems = this.props.projects.map(project =>
        (
          <ProjectItem key={project.title} project={project} />
        )
      );
    }
    return (
      <div className="projects">
        <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

export default Projects;
