import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    console.log(this.props);
    return (
      this.props.projects.projects.forEach(element =>
        <li className="projects">
          element
        </li>
      )
    );
  }
}

export default ProjectItem;
