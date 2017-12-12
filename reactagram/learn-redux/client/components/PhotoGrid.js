import React from 'react';
import {Link} from 'react-router';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    )
  }
});

export default PhotoGrid;
