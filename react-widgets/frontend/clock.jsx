import React from 'react';


class Clock extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.tick();
  }

  tick() {
    this.interval = setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const time = this.state.time;
    return(
      <div>
        <h1>Clock</h1>
        {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
      </div>
    );
  }
}



export default Clock;
