import React, { Component } from 'react';


class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject:{}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.refs.title.value);
  }


  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    })
    return (
      <div>
        <h2>Add Project</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" placeholder="Enter..."/>
          </div>

          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
