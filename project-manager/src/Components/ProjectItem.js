import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <li className="projects">
        {this.props.project.title} - {this.props.project.category}
        </li>
      </div>
    );
  }
}

export default ProjectItem;
