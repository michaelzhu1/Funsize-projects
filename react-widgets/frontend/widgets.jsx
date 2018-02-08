import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

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

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
