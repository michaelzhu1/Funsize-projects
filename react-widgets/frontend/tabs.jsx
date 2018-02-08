import React from 'react';

const Header = (props) => {
  let headers = props.panes.map((pane, index) => {
    let title = pane.title;
    let style = '';
    if (index === props.currentTab) {
      style = 'active';
    }

    return (
      <li
        key={index}
        className={style}
        onClick={props.onTabChosen.bind(null, index)}>
        {title}{' '}
      </li>
    );
  });
  return (
    <ul>
      {headers}
    </ul>
  );
};



class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
  }

  selectTab(num) {
    this.setState({ currentTab: num });
  }

  render() {
    return(
      <div className="tabs">
        <h1>Tabs</h1>
        <Header
          currentTab={this.state.currentTab}
          onTabChosen={this.selectTab}
          panes={this.props.tabs}/>
      </div>
    );
  }
}

export default Tabs;
