import React, { Component } from 'react';
import uuid from 'uuid';

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
     this.setState({newProject:
       {id: uuid.v4(),
         title: this.refs.title.value,
        category: this.refs.category.value
        }
      }, function() {
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      })
      this.refs.title.value = '';
  }


  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
        <h2>Add Project</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" placeholder="Enter..." required/>
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
