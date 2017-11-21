import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }


  render() {
    // console.log(this.props);
    return (
      <div>
        <li className="projects">
        <strong>{this.props.project.title} </strong>
        - {this.props.project.category}
        <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
        </li>
      </div>
    );
  }
}

export default ProjectItem;
