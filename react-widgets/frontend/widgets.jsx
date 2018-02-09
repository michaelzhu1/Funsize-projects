import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';


// tabs information that gets passed down to Tabs component
const tabs = [
  {title: 'First tab', content: 'Nothing too interesting'},
  {title: 'Second tab', content: 'You should go back to first tab'},
  {title: 'Third tab', content: 'This is the last tab for now'}
];

class Root extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <Tabs tabs={tabs}/>
      </div>
    );
  }
}



// Render the Root component that includes all widgets
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
