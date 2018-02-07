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
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;
    return(
      <div>
        <h1>Clock</h1>
        {hours} : {minutes} : {seconds}
      </div>
    );
  }
}



export default Clock;
