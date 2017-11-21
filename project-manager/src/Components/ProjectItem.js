import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <li className="projects">
        <strong>{this.props.project.title} </strong>
        - {this.props.project.category}
        </li>
      </div>
    );
  }
}

export default ProjectItem;
